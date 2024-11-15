// Create particle class
export class Particle {
    constructor(canvas) {
        // Particle position
        this.x = Math.random() * canvas.width;
        this.y = 0;
        // Particle attributes
        this.speed = 0;
        this.velocity = Math.random() * 0.5;
        this.size = Math.random() * 0.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
    }

    update(canvas, pixelMap) {
        // Round down ad sintegers x and y coordinates
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        // Adjust particle speed according pixel's brigthness
        this.speed = pixelMap[this.position1][this.position2][0];
        let movement = (2.5 - this.speed) + this.velocity


        // Change particle position
        this.y += movement;
        // Reposition  particle on top of canvas
        if (this.y >= canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw(context) {
        // Draw particle on canvas
        context.beginPath();
        context.fillStyle = 'white';
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fill();
    }
}


/**
 *  Populate an array with n number of Particles
 * 
 * This function takes a number of Particles as argument and the html
 * canvas element where each of those particles is going to be created.
 * It returns an array of Particle objects which lenght is the number passed in
 * as an argument.
 * 
 * @param {HTMLCanvasElement} canvas - The html canvas element where particles are created.
 * @param {number} totalParticles - The total number of Particles inside the returned array.
 * @returns {Particle[]} - An array of Particle objects representing particles inside canvas.
 */
function getParticles(canvas, totalParticles) {

    let particlesArray = []

    // Populate the particles array with new particles
    for (let i = 0; i < totalParticles; i++) {
        particlesArray.push(new Particle(canvas));
    }
    return particlesArray;
}


// Export functions
const Particles = {
    getParticles
}

export default Particles;