function setup() {
  init();
}

function draw() {

  // Update
  spawn()

  // Draw
  rect(0,0,590,590);
  for (var i = 0; i < enemies.length; i++) {
    thisEnemy = enemies[i];

    thisEnemy.update();

    var c = color(220, 10, 10);

    fill(c);
    noStroke();
    rect(
      int(thisEnemy.position.x),
      int(thisEnemy.position.y),
      20,
      20
    );
  }

  // Draw the walls
  for (var i = 0; i < walls.length; i++) {
    var thisWall = walls[i];
    var c = color(
      255 - (thisWall.health / 500 * 200 + 40),
      thisWall.health / 500 * 200 + 40,
      0
    );

    fill(c);
    noStroke();
    rect(
      thisWall.position.x,
      thisWall.position.y,
      thisWall.dims.x,
      thisWall.dims.y
    );
  }

  var c = color(0, 0, 0);
  fill(c);
}

function mousePressed() {
  //enemies.push(new Enemy);
}