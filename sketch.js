let noiseTime = 0;
let noiseTam = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // background(255);

  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTime), 0, 1, 50, 5);
  noiseTime += 0.006;
  noiseTam += 0.01;

  fill(180, 100, 13);
  stroke(100, 50, 0, 50);
  strokeWeight(5);
  circle(posX, posY, tam);

  let posXRef = posX;
  let posYRef = windowHeight - posY;
  let tamRef = tam;

  fill(100, 50, 130);
  stroke(100, 150, 10, 50);
  strokeWeight(5);
  circle(posXRef, posYRef, tamRef);
}
