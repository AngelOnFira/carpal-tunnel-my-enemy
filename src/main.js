function setup() {
  createCanvas(displayWidth, displayHeight);

  enemies = [];
}

function draw() {
  for (var i = 0; i < enemies.length; i++) {
    rect(
      int(enemies[i].position.x),
      int(enemies[i].position.y),
      20,
      20
    );
  }
}

function mousePressed() {
  enemies.push(new Enemy);
}