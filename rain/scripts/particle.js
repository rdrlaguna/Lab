
class Particle {
    constructor(canvas) {
        // Particle position
        this.x = Math.random() * canvas.width;
        this.y = 0;
        // Particle attributes
        this.speed = 0;
        this.velocity = Math.random() * 3.5;
        this.size = Math.random() * 1.5 + 1;
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
    }

    update(canvas) {
        // Round down ad sintegers x and y coordinates
        this.position1 = Math.floor(this.y);
        this.position2 = Math.floor(this.x);
        this.speed = mappedImage[this.position1][this.position2][0];


        // Change particle position
        this.y += this.velocity;
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