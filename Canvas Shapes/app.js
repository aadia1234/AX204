// Creating new image

var mario8bit = new Image();
mario8bit.src = "mario8bit.png";

//putting picture on the canvas
mario8bit.onload = function(){
  ctx5.drawImage(mario8bit, 200, 250, 150, 150);
}
var luigi8bit = new Image();
luigi8bit.src = "luigi8bit.png";

luigi8bit.onload = function(){
  ctx5.drawImage(luigi8bit, 100, 270, 75, 100);
}

var bowser8bit = new Image();
bowser8bit.src = "bowser8bit.png";

bowser8bit.onload = function(){
  ctx5.drawImage(bowser8bit, 450, 270, 100, 100);
}

var fireball8bit = new Image();
fireball8bit.src = "fireball8bit.png";

fireball8bit.onload = function(){
  ctx5.drawImage(fireball8bit, 285, 320, 30, 30);
}

//Canvas

var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(75,0);
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "purple";
ctx.fill();

var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle = "red";
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "blue"
ctx2.fill();

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.arc(100,100,80,0,6.28)
ctx3.closePath();
ctx3.fillStyle = "green";
ctx3.fill();

var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');
ctx4.beginPath();
ctx4.strokeStyle = "blue";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(0,0);
ctx4.moveTo(150,150);
ctx4.lineTo(150,300);
ctx4.lineTo(0,300);
ctx4.lineTo(300,0);
ctx4.lineTo(150,0);
ctx4.closePath();
ctx4.fillStyle = "#FF0000";
ctx4.fill();

var c5 = document.getElementById('scene');
var ctx5 = c5.getContext("2d");
//Sky & Land
ctx5.fillStyle = "green";
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle = "cyan";
ctx5.fillRect(0,0,800,350);
//Sun
ctx5.beginPath();
ctx5.arc(100,100,50,0,6.28)
ctx5.closePath();
ctx5.fillStyle = "yellow";
ctx5.fill();
//road
ctx5.beginPath();
ctx5.moveTo(350,350);
ctx5.lineTo(400,350);
ctx5.lineTo(450,500);
ctx5.lineTo(300,500);
ctx5.closePath();
ctx5.fillStyle = "grey";
ctx5.fill();
ctx5.moveTo(375,500);
ctx5.lineTo(375,350);
ctx5.strokeStyle = "black";
ctx5.stroke();
//building
ctx5.fillStyle = "grey";
ctx5.fillRect(100,250,200,100);
ctx5.clearRect(130,310,20,20);
ctx5.clearRect(170,310,20,20);
ctx5.clearRect(210,310,20,20);
ctx5.clearRect(250,310,20,20);
ctx5.clearRect(130,270,20,20);
ctx5.clearRect(170,270,20,20);
ctx5.clearRect(210,270,20,20);
ctx5.clearRect(210,270,20,20);
ctx5.clearRect(250,270,20,20);

//fireball


//add text to canvas
ctx5.font = "italic 30pt comic sans MS";
ctx5.fillStyle = "tomato"
ctx5.fillText("Super mario bros!", 300, 50);
