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

---

## Project Structure 
The repository is organized as follows, allowing for easy addition of future projects.

``` bash
Lab/
├── LICENSE          # License file at the root level
├── README.md        # Repository description
├── rain/            # First creative coding project
│   ├── index.html   # Main HTML file
│   ├── script.js    # JavaScript code for the animation
│   ├── styles.css   # Optional styling (if needed)
│   └── assets/      # Folder for images and resources
└── other-projects/  # Placeholder for future projects


```

- **index.html**: Contains the HTML Canvas setup.
- **script.js**: Contains JavaScript code for loading the image, calculating brightness, and animating the particles.
- **styles.css**: Optional styling file for customizing appearance if needed.

---

## Technical Concepts

This project introduces a range of technical concepts in creative coding:

### 1. HTML Canvas API

The HTML Canvas API allows for drawing graphics, animations, and visual effects directly on a webpage. In this project, it’s used to render both the background image and the raindrop particles.

### 2. Image procesing

Using ```getImageData```, the brightness of each pixel in the background image is calculated. This allows us to make the raindrop particles speed up in darker areas and slow down in brighter areas.

**Brightness Calculation**

Brightness can be determined from RGB values using the formula:
```JavaScript
brightness = (0.299 * red + 0.587 * green + 0.114 * blue);
```
### 3. Particle System

Each particle (or raindrop) is represented as an object with properties like position, speed, and size. A loop updates each particle’s position based on the brightness of the underlying pixels, creating a realistic rain effect.

**Particle Movement Logic**

Each Frame:

- The ```brightness``` of the underlying pixel is calculated.
- A speed multiplier is applied to each particle based on brightness.
- Particles are redrawn at their new position, creating a falling effect.

### 4. Animation

The ```requestAnimationFrame``` method is used for smooth animation by calling the function responsible for updating particle positions at the optimal frame rate.

---

## Future Goals

This repository will expand as I continue learning and experimenting with creative coding. Future project ideas include:

- **Particle Effects**: Exploring different particle behaviors, like fireflies, snow, or fog.
- **Physics Simulations**: Creating animations that include gravity, wind, and collision.
- **Generative Art**: Experimenting with algorithms to produce visually engaging abstract art.
- **Interactive Elements**: Adding interactivity (e.g., mouse/touch controls) to make animations reactive to user input.
- **3D Animations**: Introducing basic 3D concepts and rendering, possibly with libraries like Three.js.

Each new project will have its own folder with a description and explanation in the README.


## Contributing

This is a personal learning project, but feedback, suggestions, or creative ideas are welcome! If you'd like to contribute:

- 1. Fork the repository.
- 2. Create a new branch for your changes.
- 3. Submit a pull request with a description of your additions.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Previews

Here's a quick preview of the rain effect: