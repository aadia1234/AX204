console.log("working!");

//Declare variables at the top (elevation of scope)
var canvas;
var ctx;
//Hold some coordinates
var x = 600;
var y = 300;
//Hold the magnitude of our movement
var mx = 2;
var my = 4;
//Holding width and height of canvas
var width = 600;
var height = 300;
//Initialise our animation
function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  return setInterval(draw, 10);
}

//Draw Circle
function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2);
  ctx.fillStyle = "blue";
  ctx.fill();
}

//Clear our canvas
function clear() {
  ctx.clearRect(0, 0, width, height);
}

// Finally, we are drawing each frame with this function:
function draw() {
  clear();
  circle(x, y, 30);

  //Stays inside canvas
  if (x + mx > width || x + mx < 0) {
    mx = -mx;
  }
  if (y + my > height || y + my < 0) {
    my = -my;
  }
  // Moving pur canvas by increasing the position by the magnitude of movement
  x += mx; // this means x = x + mx
  y += my;
}
init();
