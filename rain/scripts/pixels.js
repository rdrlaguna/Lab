// Pixel related functions


function calculateBrightness(canvas, pixels){

    let map = []

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
            const cell = [brightness];
            row.push(cell);
        }
        map.push(row);
    }

    return map;
}


// Return relative brightness of pixel
function relativeBrightness(red, green, blue) {
    return Math.sqrt(
        (red * red) * 0.299 +
        (green * green) * 0.587 +
        (blue * blue) * 0.114
    )/100;
}


const Pixels = {
    calculateBrightness
}

export default Pixels;