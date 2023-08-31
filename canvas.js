const canvas = document.querySelector("canvas");

const sizeRatio = 0.65;
const vorticeRadius = 20;

canvas.width = (900 * sizeRatio) + (vorticeRadius * 2);
canvas.height = (900 * sizeRatio) + (vorticeRadius * 2);

const ctx = canvas.getContext('2d');

/*
ctx.fillRect(300, 300, 100, 100);

ctx.beginPath();
ctx.moveTo(50, 0);
ctx.lineTo(0, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 50);
ctx.lineTo(100, 0);
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.lineTo(100, 200);
ctx.fill();

ctx.fillRect(250, 250, 300, 1);
*/

/*
let drawingStatus = false;

canvas.addEventListener("mousedown", (event) => {
    drawingStatus = true;
    ctx.moveTo(event.clientX, event.clientY);
});

canvas.addEventListener("mousemove", (event) => {
    if (drawingStatus) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
    }
});

canvas.addEventListener("mouseup", (event) => {
    if (drawingStatus) {
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        drawingStatus = false;
    }
});
*/


drawTriangle();
drawAllVortices();


canvas.addEventListener("mousemove", (event) => {
    console.log("MOUSE MOVING")
    const vortice1distance = calculateVorticeDistance(event.clientX, event.clientY, 450, 0);

    const vortice2distance = calculateVorticeDistance(event.clientX, event.clientY, 300, 300);
    const vortice3distance = calculateVorticeDistance(event.clientX, event.clientY, 400, 300);
    const vortice4distance = calculateVorticeDistance(event.clientX, event.clientY, 500, 300);
    const vortice5distance = calculateVorticeDistance(event.clientX, event.clientY, 600, 300);

    const vortice6distance = calculateVorticeDistance(event.clientX, event.clientY, 150, 600);
    const vortice7distance = calculateVorticeDistance(event.clientX, event.clientY, 350, 600);
    const vortice8distance = calculateVorticeDistance(event.clientX, event.clientY, 550, 600);
    const vortice9distance = calculateVorticeDistance(event.clientX, event.clientY, 750, 600);

    const vortice10distance = calculateVorticeDistance(event.clientX, event.clientY, 0, 900);
    const vortice11distance = calculateVorticeDistance(event.clientX, event.clientY, 300, 900);
    const vortice12distance = calculateVorticeDistance(event.clientX, event.clientY, 600, 900);
    const vortice13distance = calculateVorticeDistance(event.clientX, event.clientY, 900, 900);

    if (vortice1distance <= vorticeRadius) {
        drawVortice(450, 0, true);
    }
    if (vortice2distance <= vorticeRadius) {
        drawVortice(300, 300, true);
    }
    if (vortice3distance <= vorticeRadius) {
        drawVortice(400, 300, true);
    }
    if (vortice4distance <= vorticeRadius) {
        drawVortice(500, 300, true);
    }
    if (vortice5distance <= vorticeRadius) {
        drawVortice(600, 300, true);
    }
    //
    if (vortice6distance <= vorticeRadius) {
        drawVortice(150, 600, true);
    }
    if (vortice7distance <= vorticeRadius) {
        drawVortice(350, 600, true);
    }
    if (vortice8distance <= vorticeRadius) {
        drawVortice(550, 600, true);
    }
    if (vortice9distance <= vorticeRadius) {
        drawVortice(750, 600, true);
    }
    //
    if (vortice10distance <= vorticeRadius) {
        drawVortice(0, 900, true);
    }
    if (vortice11distance <= vorticeRadius) {
        drawVortice(300, 900, true);
    }
    if (vortice12distance <= vorticeRadius) {
        drawVortice(600, 900, true);
    }
    if (vortice13distance <= vorticeRadius) {
        drawVortice(900, 900, true);
    }
})

function calculateVorticeDistance(clientX, clientY, vorticeX, vorticeY) {
    return Math.sqrt(
        Math.pow(
            (normalizeCoordinate(vorticeX) - (clientX))
            , 2)
        +
        Math.pow(
            (normalizeCoordinate(vorticeY) - (clientY))
            , 2)
    );
}

function normalizeCoordinate(coordinateNumber) {
    return ((coordinateNumber * sizeRatio) + vorticeRadius);
}

function drawVortice(xCoordinate, yCoordinate, filledVortice) {
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(xCoordinate) + vorticeRadius, normalizeCoordinate(yCoordinate));
    ctx.arc(normalizeCoordinate(xCoordinate), normalizeCoordinate(yCoordinate), vorticeRadius, 0, Math.PI * 2, true);
    if (!!filledVortice) {
        ctx.fill();
    }
    else {
        ctx.stroke();
    }
}

function cleanCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawAllVortices() {
    // --- VERTICES --- //
    drawVortice(450, 0, false); // Vertice 1
    // Vertices primera linea horizontal
    drawVortice(300, 300, false); // Vertice 2
    drawVortice(400, 300, false);// Vertice 3
    drawVortice(500, 300, false);// Vertice 4
    drawVortice(600, 300, false);// Vertice 5
    // Vertices segunda linea horizontal
    drawVortice(150, 600, false);// Vertice 6
    drawVortice(350, 600, false);// Vertice 7
    drawVortice(550, 600, false);// Vertice 8
    drawVortice(750, 600, false);// Vertice 9
    // Vertices tercera linea horizontal
    drawVortice(0, 900, false);// Vertice 10
    drawVortice(300, 900, false);// Vertice 11
    drawVortice(600, 900, false);// Vertice 12
    drawVortice(900, 900, false);// Vertice 13
}

function drawTriangle() {
    // Big triangle
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(450), normalizeCoordinate(0));
    ctx.lineTo(normalizeCoordinate(0), normalizeCoordinate(900));
    ctx.lineTo(normalizeCoordinate(900), normalizeCoordinate(900));
    ctx.closePath();
    ctx.stroke();

    // Primera linea vertical
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(450), normalizeCoordinate(0));
    ctx.lineTo(normalizeCoordinate(300), normalizeCoordinate(900));
    ctx.stroke();

    // Segunda linea vertical
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(450), normalizeCoordinate(0));
    ctx.lineTo(normalizeCoordinate(600), normalizeCoordinate(900));
    ctx.stroke();

    // Primera linea horizontal
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(300), normalizeCoordinate(300));
    ctx.lineTo(normalizeCoordinate(600), normalizeCoordinate(300));
    ctx.stroke();

    // Segunda linea horizontal
    ctx.beginPath();
    ctx.moveTo(normalizeCoordinate(150), normalizeCoordinate(600));
    ctx.lineTo(normalizeCoordinate(750), normalizeCoordinate(600));
    ctx.stroke();
}