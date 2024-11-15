
document.addEventListener('DOMContentLoaded', function() { 

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 706;

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

});