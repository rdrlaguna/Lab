
document.addEventListener('DOMContentLoaded', function() {
    // Canvas configuration
    const canvas = this.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 706;

    // Draw image on canvas
    ctx.drawImage(skull, 0, 0, canvas.width, canvas.height);

    // Hold all particles
    let particles = [];
    const totalParticles = 5000;



    function init() {
        // Populate the particles array with new particles
        for (let i = 0; i < totalParticles; i++) {
            particles.push(new Particle(canvas));
        }
    }

    init();

    function animate() {
        // Draw semitransparent rectangle over cnavas
        ctx.drawImage(skull, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.heigth);

        // Draw each particle in the array
        particles.forEach(particle => {
            particle.update(canvas);
            particle.draw(ctx);
        })
        requestAnimationFrame(animate);
    }

    animate();

    
});