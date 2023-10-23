let noiseTime = 0;
let noiseTam = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // background(255);

  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 100), 0, 1, 0, windowHeight);

  let tam = map(noise(noiseTime), 0, 1, 50, 5);
  noiseTime += 0.006;
  noiseTam += 0.1;

  fill(255);
  stroke(0, 50);
  strokeWeight(4);
  circle(posX, posY, tam);

}
