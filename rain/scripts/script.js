
document.addEventListener('load', function() {
    // Canvas configuration
    const canvas = this.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.heigth = 1500;

    // Hold all particles
    let particles = [];
    const totalParticles = 1000;

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
    }
    
});