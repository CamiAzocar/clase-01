var a = 50;
var b = 80
var c;
function setup() {
  createCanvas(windowWidth, windowHeith);
}

function draw() {
  //esto es un comentario
  /*
  y esto solo
  un comentareio mas largo
  */
  colorMode(HSB,360,100,100)
  //background(0,100,100);
  fill(random(0,60),100,100);
  noStroke();
  c = a * random(1,5);
  ellipse(mouseX,mouseY,c,c)
}
