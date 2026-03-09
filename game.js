const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
            debug: false // Set to true to see hitboxes
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let currentBlock;
let blocks = [];
let streak = 0;
let isGameOver = false;
let moveSpeed = 3;
let direction = 1; // 1 for right, -1 for left
let towerHeight = 0;

function preload() {
    // We are using generated graphics, so no external assets needed for now
}

function create() {
    // 1. Create the Ground
    const ground = this.matter.add.rectangle(200, 580, 400, 40, { isStatic: true });
    this.add.rectangle(200, 580, 400, 40, 0x34495e);

    // 2. Initial UI update
    this.scoreLabel = document.getElementById('score');
    this.heightLabel = document.getElementById('height');

    // 3. Spawn the first block
    spawnBlock.call(this);

    // 4. Input Listener
    this.input.on('pointerdown', () => {
        if (isGameOver) {
            location.reload(); // Quick restart
            return;
        }
        dropBlock.call(this);
    });
}

function spawnBlock() {
    // Position the new block at the top
    const yPos = 100;
    currentBlock = this.matter.add.rectangle(200, yPos, 80, 30, {
        friction: 0.5,
        restitution: 0.1
    });
    
    // Disable gravity until player clicks
    currentBlock.isStatic = true;
    
    // Visual representation
    currentBlock.view = this.add.rectangle(200, yPos, 80, 30, 0x3498db);
}

function dropBlock() {
    currentBlock.isStatic = false; // Enable physics
    const droppedBlock = currentBlock;
    blocks.push(droppedBlock);
    currentBlock = null;

    // Wait for the block to settle before spawning next or ending game
    this.time.delayedCall(1500, () => {
        if (droppedBlock.position.y > 600 || Math.abs(droppedBlock.angle) > 1) {
            handleGameOver.call(this);
        } else {
            streak++;
            moveSpeed += 0.3; // Scaling difficulty
            this.scoreLabel.innerText = `Streak: ${streak}`;
            this.heightLabel.innerText = `Height: ${blocks.length}m`;
            
            // Camera effect: Move up as tower grows
            if (blocks.length > 5) {
                this.cameras.main.pan(200, 300 - (blocks.length * 10), 500);
            }
            
            spawnBlock.call(this);
        }
    });
}

function update() {
    if (currentBlock && currentBlock.isStatic) {
        // Move block back and forth
        currentBlock.view.x += moveSpeed * direction;
        this.matter.body.setPosition(currentBlock, { x: currentBlock.view.x, y: currentBlock.position.y });

        if (currentBlock.view.x > 350 || currentBlock.view.x < 50) {
            direction *= -1; // Reverse direction
        }
    }

    // Sync physical bodies with visual rectangles
    blocks.forEach(b => {
        if (b.view) {
            b.view.x = b.position.x;
            b.view.y = b.position.y;
            b.view.rotation = b.angle;
        }
    });
}

function handleGameOver() {
    isGameOver = true;
    this.add.text(100, 300, 'GAME OVER\nTap to Restart', { 
        fontSize: '32px', 
        fill: '#e74c3c', 
        align: 'center' 
    });
}