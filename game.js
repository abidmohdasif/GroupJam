const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    physics: {
        default: 'matter',
        matter: { gravity: { y: 1 }, debug: false }
    },
    scene: { preload: preload, create: create, update: update }
};

let game = new Phaser.Game(config);
let currentBlock;
let streak = 0;
let speed = 4;

function create() {
    // Add a static ground
    this.matter.add.rectangle(200, 580, 400, 40, { isStatic: true });
    
    // UI Elements
    this.scoreText = this.add.text(10, 10, 'Streak: 0', { fontSize: '24px', fill: '#fff' });
    
    spawnBlock.call(this);

    this.input.on('pointerdown', () => {
        if (currentBlock) {
            currentBlock.setIgnoreGravity(false);
            currentBlock = null;
            
            // Logic to wait for landing, then spawn next
            this.time.delayedCall(1000, () => {
                streak++;
                speed += 0.5; // Difficulty scaling
                this.scoreText.setText('Streak: ' + streak);
                spawnBlock.call(this);
            });
        }
    });
}

function spawnBlock() {
    currentBlock = this.matter.add.rectangle(200, 50, 60, 30);
    currentBlock.setIgnoreGravity(true);
}
