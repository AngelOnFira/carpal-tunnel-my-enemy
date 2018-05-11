function setup() {
  createCanvas(displayWidth, displayHeight);

  enemies = [];
  walls = [];

  walls.push(new Wall(100, 100, 1));
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

  for (var i = 0; i < walls.length; i++) {
    rect(
      walls[i].position.x,
      walls[i].position.y,
      walls[i].dims.x,
      walls[i].dims.y
    );
  }
}

function mousePressed() {
  enemies.push(new Enemy);
}