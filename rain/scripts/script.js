import Pixels from "./pixels.js";


document.addEventListener('DOMContentLoaded', function() {
    // Canvas configuration
    const canvas = this.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 706;

    // Draw image on canvas
    ctx.drawImage(skull, 0, 0, canvas.width, canvas.height);
    // Get RGBA values for each pixel in canvas
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hold all particles
    let particles = [];
    const totalParticles = 5000;

    // Brigthness map of the image
    let mappedImage = Pixels.calculateBrightness(canvas, pixels);

    function init() {
        // Populate the particles array with new particles
        for (let i = 0; i < totalParticles; i++) {
            particles.push(new Particle(canvas));
        }
    }

    init();

    function animate() {
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.02;
        
        // Draw each particle in the array
        particles.forEach(particle => {
            particle.update(canvas, mappedImage);
            ctx.globalAlpha = particle.speed * 0.5;
            particle.draw(ctx);
        })
        requestAnimationFrame(animate);
    }

    animate();

    
});