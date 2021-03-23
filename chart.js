//chart element
const chart = document.querySelector(".chart");

// CREATE CANVAS ELEMMENT
const canvas = document.createElement("canvas");
canvas.width = 120;
canvas.height = 120;

// APPEND CANVAS TO CHART ELEMENT
chart.appendChild(canvas);

// TO DRAW ON CANVAS, WE NEED TO GET CONTEXT OF CANVAS
const ctx = canvas.getContext("2d");

// CHANGE THE LINE WIDTH
ctx.lineWidth = 68;

// CIRCLE RADIUS
const R = 120;

function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( budget, expense){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = budget / (budget+expense);

    drawCircle("#333333", - ratio, true);
    drawCircle("#F0624D", 1 - ratio, false);
}