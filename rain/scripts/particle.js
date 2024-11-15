
class Particle {
    constructor(canvas) {
        // Particle position
        this.x = Math.random() * canvas.width;
        this.y = 0;
        // Particle attributes
        this.speed = 0;
        this.velocity = Math.random() * 3.5;
        this.size = Math.random() * 1.5 + 1;
    }

    update(canvas) {
        // Change particle position
        this.y += this.velocity;
        // Reposition  particle on top of canvas
        if (this.y >= canvas.heigth) {
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