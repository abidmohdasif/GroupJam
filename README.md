# 🕹️ GroupJam Arcade

> **Play now:** [abidmohdasif.github.io/GroupJam](https://abidmohdasif.github.io/GroupJam/)

A consecutive challenge arcade — beat all three stages in one run to claim **Arcade Master**.

---

## 🎯 How It Works

GroupJam is a **3-stage consecutive arcade**. You must hit the required combo/objective in each game to unlock the next. Complete all three in a single run to fill the progress bar to **3 / 3** and earn the Arcade Master title.

```
STACK BUILDER  ──→  PIANO TILES  ──→  BULLSEYE
  15 Streak             30 Combo         Bullseye!
```

> ⚠️ Reloading the page resets your progress. Navigate between games using the in-game **← ARCADE HUB** buttons to keep your unlock state.

---

## 🏗️ Stage 1 — Stack Builder

Drop falling blocks to build the tallest tower. Precision and timing unlock the next stage.

### Controls

| Input | Action |
|---|---|
| `Space` / `↓` / `Enter` | Drop the block |
| Mouse click / Tap | Drop the block |

### How to Play

1. A block slides back and forth across the screen at the top of your tower.
2. Press any drop key or tap to release it — it will fall straight down.
3. The block is **trimmed** to only the overlapping section with the block below. Every drop gets narrower, so be precise.
4. You need at least **30% overlap** to count as a successful placement. Too little and it's Game Over.
5. Build a **15-block consecutive streak** without dropping a block to unlock Stage 2.

### Tips

- **Wind** kicks in after height 3 and pushes falling blocks sideways — watch the wind indicator at the bottom.
- Speed increases steeply with height — by height 15+ it becomes very fast.
- The multiplier increases every 5 consecutive hits, boosting your score.
- Aim for the centre of the block below for the cleanest trim and the widest next block.

### Scoring

- Base: **100 pts** per block × your current multiplier.
- Multiplier goes up by 1 for every 5 consecutive blocks placed.
- A perfect centred drop preserves full width and earns the max trim bonus.

---

## 🎹 Stage 2 — Piano Tiles *(Unlocked after 15 Streak)*

Tap the falling tiles in time with **In The Air Tonight** by Phil Collins. Don't break the rhythm.

### Controls

| Key | Lane |
|---|---|
| `D` | Lane 1 (Teal) |
| `F` | Lane 2 (Blue) |
| `J` | Lane 3 (Pink) |
| `K` | Lane 4 (Yellow) |

### How to Play

1. Notes fall down four lanes from the top of the screen.
2. Press the matching key when a note reaches the **glowing hit line** near the bottom.
3. Hit notes within the timing window to register a hit. Too early, too late, or a ghost press breaks your streak.
4. Build a **30-note consecutive combo** without missing to unlock the Final Stage.
5. The song lasts ~4 minutes and 53 seconds — you start at the ~2:50 mark, right before things get intense.

### The Drum Break 🥁

At **3:39** into the song, the iconic Phil Collins drum fill hits. Watch for the **🥁 DRUM BREAK!** alert on screen. Gold notes appear rapidly across all four lanes — these are worth **3× points each**. Survive the fill to reach the full-band section.

### Tips

- Ghost-pressing a lane (hitting a key with no note in range) **breaks your streak** — only press when a note is there.
- The multiplier increases every 10 consecutive hits (1×, 2×, 3× ...).
- A yellow marker on the song progress bar shows exactly where the drum break lands.
- If you hit 30 combo, an **UNLOCKED!** modal appears — you can head to the Arcade Hub immediately or keep playing to build a higher score.

### Scoring

- Base: **100 pts** per hit × multiplier.
- Drum break notes: **300 pts** × multiplier.
- Multiplier: +1 per 10 consecutive hits.

---

## 🏹 Stage 3 — Bullseye *(Final Stage — Unlocked after 30 Combo)*

Draw your bow, read the wind, and hit the gold. **One bullseye wins it all.**

### Controls

| Input | Action |
|---|---|
| Hold mouse button / Hold tap | Draw the bow |
| Move mouse / drag | Aim |
| Release mouse button / Release tap | Shoot |
| `Esc` | Quit to start screen |

### How to Play

1. Move your cursor over the target to aim — a reticle shows your current aim point.
2. **Hold** the mouse button to draw the bow. The longer you hold, the steadier your shot.
3. Watch the **draw bar** at the bottom of the screen:
   - 🔴 **0–40%** — Bow barely drawn, very loose accuracy
   - 🟠 **40–80%** — Getting steady
   - 🟢 **80–100%** — Full draw, tightest accuracy — release now!
4. **Release** to fire. The arrow lands with a small random scatter based on your draw percentage.
5. You have **5 arrows**. Hit the bullseye (gold centre ring) with any one of them to win.

### Wind

After every arrow, the wind changes. A **wind indicator** at the top centre of the screen shows:

- The wind **speed** (0.0 – 5.0)
- The wind **direction** (→ right or ← left)
- Colour indicates intensity: 🟢 calm · 🟡 moderate · 🔴 strong

Compensate by aiming **into** the wind — if wind blows right (→), aim slightly left of the bullseye.

### Target Rings & Points

| Ring | Points |
|---|---|
| 🥇 Bullseye (gold) | 100 — **WINS THE GAME** |
| Inner Red | 55 |
| Outer Red | 45 |
| Inner Blue | 35 |
| Outer Blue | 25 |
| Inner / Outer Black | 12 / 8 |
| Inner / Outer White | 6 / 4 |
| Off target | Miss |

### Tips

- Always wait for **Full Draw** before releasing for the tightest shot circle.
- Strong wind (pink colour) can shift your arrow by a full ring width — aim well off-centre to compensate.
- Missing the target entirely triggers a red flash and shakes the board — stay calm, you still have arrows.
- You only need **one bullseye** in five arrows — take your time on each shot.

---

## 🏆 Arcade Master

Complete all three stages in a consecutive run to reach **3 / 3 STAGES** on the progress bar. The Arcade Master badge appears on the hub once you return after winning Bullseye.

---

## 🔧 Dev Shortcuts *(on the Arcade Hub page)*

Type these key sequences anywhere on the hub to skip stages during testing:

| Sequence | Effect |
|---|---|
| `unlock2` | Unlock Stage 2 (Piano Tiles) |
| `unlock3` | Unlock Stage 3 (Bullseye) |
| `reset` | Reload and reset all progress |

---

## 🛠️ Tech Stack

- Vanilla HTML, CSS, JavaScript — no frameworks or build tools
- Web Audio API for all sound effects and bow draw audio
- Canvas 2D API for all game rendering
- `sessionStorage` for cross-page unlock state (resets on page reload)

---

*Built for GroupJam · 2026*
