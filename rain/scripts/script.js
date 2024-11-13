
document.addEventListener('DOMContentLoaded', function() {
    // Canvas configuration
    const canvas = this.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 500;
    canvas.heigth = 700;

    /**/

    // Hold all particles
    let particles = [];
    const totalParticles = 100;

    class Particle {
        constructor() {
            // Particle position
            this.x = Math.random() * canvas.width;
            this.y = 0;
            // Particle attributes
            this.speed = 0;
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 10 + 1;
        }

        update() {
            // Change particle position
            this.y += this.velocity;
            // Reposition  particle on top of canvas
            if (this.y >= canvas.heigth) {
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            // Draw particle on canvas
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }

    }

    function init() {
        // Populate the particles array with new particles
        for (let i = 0; i < totalParticles; i++) {
            particles.push(new Particle);
        }
    }

    init();

    /*
    particles.forEach(particle => {
        // Test drawing particles
        particle.draw();
    })
    */

    function animate() {
        // Draw semitransparent rectangle over cnavas
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.heigth);

        // Draw each particle in the array
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
    }

    animate();

    


    
});