const canvas = document.getElementById('trailCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseX = 0;
let mouseY = 0;
const trailLength = 10; // Length of the trail
const trail = [];

// Function to update the mouse position

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Function to draw the trail
function drawTrail() {
    // Add the current mouse position to the trail
    trail.push({ x: mouseX, y: mouseY });
    // Limit the trail length
    if (trail.length > trailLength) {
        trail.shift(); // Remove the oldest position
    }

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the trail
    ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);
    for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
    }
    ctx.strokeStyle = 'blue'; // Color of the trail
    ctx.lineWidth = 5; // Width of the trail
    ctx.stroke();


    requestAnimationFrame(drawTrail); // Call the drawTrail function again

}

// Start drawing the trail
drawTrail();

/*-------------------------------------------------------------------------------------------------------------*/


