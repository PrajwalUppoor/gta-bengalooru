# 🌆 Benglooru (Chapter 1) — GTA Bengalooru

An open-world 3D action adventure game set in **Koramangala, Bengaluru (Bangalore)** running directly in your web browser with pure WebGL, Three.js, and Rapier 3D physics. Voiced in Kanglish with localized city ambience, weather, traffic, and missions.

---

## 🎮 How to Play

### 1. Launch the Game Locally
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended):

```bash
# Clone the repository
git clone https://github.com/PrajwalUppoor/gta-bengalooru.git
cd gta-bengalooru

# Start the game server
node server.mjs
```

Open your browser and navigate to:
👉 **`http://localhost:3000/`**

> **Tip:** You can also run any lightweight static server that supports Range headers (e.g. `npx serve .` or `python -m http.server 3000`), though `node server.mjs` is optimized for streaming audio and voiceovers.

---

## 🕹️ Controls

### 🚶 On Foot
| Action | Key / Input |
|---|---|
| **Move** | <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> or Arrow Keys |
| **Look Around** | Mouse |
| **Sprint** | <kbd>Shift</kbd> (Hold or Toggle) |
| **Jump** | <kbd>Space</kbd> |
| **Crouch / Sneak** | <kbd>C</kbd> |
| **Walk Slowly** | <kbd>Alt</kbd> |
| **Punch / Attack** | Left Click or <kbd>J</kbd> |
| **Block** | Right Click or <kbd>K</kbd> |
| **Dodge Roll** | <kbd>L</kbd> |
| **Drop Weapon** | <kbd>G</kbd> |
| **Interact / Talk / Buy** | <kbd>E</kbd> |
| **Enter / Exit Vehicle** | <kbd>F</kbd> |

### 🚗 Driving & Riding
| Action | Key / Input |
|---|---|
| **Accelerate** | <kbd>W</kbd> / <kbd>Up Arrow</kbd> |
| **Brake / Reverse** | <kbd>S</kbd> / <kbd>Down Arrow</kbd> |
| **Steer** | <kbd>A</kbd> <kbd>D</kbd> / <kbd>Left</kbd> <kbd>Right Arrow</kbd> |
| **Handbrake** | <kbd>Space</kbd> |
| **Horn** | <kbd>H</kbd> |
| **Radio Station** | <kbd>R</kbd> (Hold to turn off) |
| **Vehicle Job (Taxi / Ambulance / Police)** | <kbd>T</kbd> |
| **Look Behind** | <kbd>C</kbd> |

### 📱 General & UI
| Action | Key / Input |
|---|---|
| **In-Game Phone (Namma Net)** | <kbd>P</kbd> |
| **Full City Map** | <kbd>M</kbd> |
| **Switch Camera** | <kbd>V</kbd> |
| **Photo Mode** | <kbd>O</kbd> |
| **Photograph Mural / Snap** | <kbd>Q</kbd> |
| **Get Unstuck (Teleport to street)** | <kbd>U</kbd> |
| **Recentre Camera** | <kbd>Z</kbd> |
| **Orbit Camera (Laptop mode)** | <kbd>,</kbd> (Left) / <kbd>.</kbd> (Right) |
| **Pause / Menu** | <kbd>Esc</kbd> |
| **Cheat Box Console** | <kbd>~</kbd> (Tilde / Backquote) |

---

## 🗺️ Sandboxes & Debug Views

You can jump into specific development sandboxes via URL query parameters:

- **Main Story Game**: `http://localhost:3000/`
- **Vehicles Garage / Physics**: `http://localhost:3000/?view=vehicles`
- **City Map Viewer**: `http://localhost:3000/?view=city`
- **NPC Life Simulation**: `http://localhost:3000/?view=life`
- **General Sandbox**: `http://localhost:3000/?view=sandbox`

---

## 🤫 Cheat Codes

Press <kbd>~</kbd> (Tilde) during gameplay or dial them in the in-game phone to activate:

- `MACHA` — Full Health restored
- `POLICEBEDA` — Clear all police wanted stars
- `AUTOWALA` — Spawn an auto rickshaw instantly
- `KASU` — Receive ₹50,000 cash

---

## 🌟 Game Highlights

- **Authentic Bengaluru Atmosphere**: Real-time day/night cycles, dynamic rain and thunderstorms, filter coffee stalls, darshinis, gulmohar trees, and roadside chaat carts.
- **Kanglish Voice Acting**: Over 400 unique dialogue lines voiced across local Bangalore characters — Auto Ramanna, Shobha Aunty, Chai Anna, delivery riders, and police constables.
- **Namma Net Smartphone**: Order food on *OotaGo*, accept delivery gigs on *Daari*, chat with family on *Gumpu*, or pay via *KaasuPay*.
- **Native 3D Physics**: Built with WebAssembly Rapier 3D physics for responsive vehicle driving, crashes, character movement, and ragdolls.
