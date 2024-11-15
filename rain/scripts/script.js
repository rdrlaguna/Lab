import Images from "./image.js";
import Particles from "./particle.js";
import Pixels from "./pixels.js";



document.addEventListener('DOMContentLoaded', function() {
    // Canvas configuration
    const canvas = this.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 706;

    // Draw image on canvas
    ctx.drawImage(Images.skull, 0, 0, canvas.width, canvas.height);

    // Get RGBA values for each pixel in canvas
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create an array of particles
    let particles = Particles.getParticles(canvas, 5000);

    // Brigthness map of the image
    let mappedImage = Pixels.calculateBrightness(canvas, pixels);

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