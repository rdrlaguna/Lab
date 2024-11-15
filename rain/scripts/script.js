
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
    let mappedImage = [];
    // Cicle over every pixel row by row
    for (let y = 0; y < canvas.height; y++) {
        // Hold pixels of each row
        let row = [];
        for (let x = 0; x < canvas.width; x++) {
            // Read RGB values of each pixel
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = relativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    console.log(mappedImage);

    // Return relative brightness of pixel
    function relativeBrightness(red, green, blue) {
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }


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