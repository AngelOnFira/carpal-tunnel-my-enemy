function init() {
	var cnv = createCanvas(700, 700);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	enemies = [[], [], [], []];
	walls = [];
	towers = [];
	buttons = [];

	walls.push(new Wall(350, 250, 0));
	walls.push(new Wall(450, 350, 1));
	walls.push(new Wall(350, 450, 0));
	walls.push(new Wall(250, 350, 1));

	towers.push(new Tower(280, 280));
	towers.push(new Tower(390, 280));
	towers.push(new Tower(280, 390));
	towers.push(new Tower(390, 390));

	startTime = millis();

	currentSpawnTime = 200;
	lastSpawn = millis();

	frameRate(30);

	money = 0;

	buttons.push(new Button(100, 100, "test", sayHi()))
}