function init() {
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  enemies = [];
  walls = [];

  walls.push(new Wall(300, 200, 0));
  walls.push(new Wall(300, 400, 0));
  walls.push(new Wall(200, 300, 1));
  walls.push(new Wall(400, 300, 1));

  var startTime = millis();

  currentSpawnTime = 2000;
  lastSpawn = millis();
}