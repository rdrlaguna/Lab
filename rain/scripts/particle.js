// Create particle class
class Particle {
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