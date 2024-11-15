# Lab: A Creative Coding Experiment Field 🧪

Welcome to **Lab**, a repository dedicated to exploring and experimenting with creative coding. This space serves as a personal laboratory for practicing and learning creative coding concepts, techniques, and animations using HTML Canvas and JavaScript.

Each project within this repository is a standalone exploration, inspired by tutorials, creative challenges, and personal curiosity. The goal is to deepen my understanding of creative coding by developing visual effects and interactive animations.

---

## Table of Contents

- [Current Project: Rain Effect Over an Image](#current-project-rain-effect-over-an-image-)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technical Concepts](#technical-concepts)
- [Future Goals](#future-goals)
- [Contributing](#contributing)
- [License](#license)

---

## Current Project: Rain Effect Over an Image 🌧️

### Project Overview
The **Rain Effect Over an Image** project demonstrates a unique rain animation overlaying an image. This effect simulates raindrops falling over an image, with particles representing the raindrops. Their speed varies according to the brightness of each pixel, creating an interactive effect where particles move:
- **Faster over darker areas** 
- **Slower over lighter areas**

This is a visually dynamic way to explore particle systems and brightness detection in JavaScript.

### Key Features
- **HTML Canvas for Rendering**: All animations are drawn on an HTML Canvas element.
- **Image Brightness Detection**: JavaScript’s `getImageData` function retrieves pixel data, enabling calculations for brightness-based animation.
- **Customizable Particle Behavior**: Particle size, speed, and density are adjustable, making it easy to extend the effect further.

---

## Getting Started

To try out the project, follow these steps:

### 1. Prerequisites

Ensure you have a basic setup with the following:
- **A code editor** like [Visual Studio Code](https://code.visualstudio.com/) or Sublime Text.
- **A modern web browser** with JavaScript enabled.

### 2. Clone the Repository
```bash
git clone https://github.com/<your-username>/Lab.git
cd Lab
```

### 3. Open the Project
Navigate to the ```rain``` folder and open index.html in your browser to view the animation.

**Project Structure**. The repository is organized as follows, allowing for easy addition of future projects.

```bash
Lab/
├── README.md        # Repository description
├── rain-effect/     # First creative coding project
│   ├── index.html   # Main HTML file
│   ├── script.js    # JavaScript code for the animation
│   ├── styles.css   # Optional styling (if needed)
│   └── assets/      # Folder for images and resources
└── other-projects/  # Placeholder for future projects

```

- **index.html**: Contains the HTML Canvas setup.
- **script.js**: Contains JavaScript code for loading the image, calculating brightness, and animating the particles.
- **styles.css**: Optional styling file for customizing appearance if needed.










