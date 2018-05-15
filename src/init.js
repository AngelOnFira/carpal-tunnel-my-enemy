function init() {
	console.log("Init");
	var cnv = createCanvas(700, 700);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight - height) / 2;
	cnv.position(x, y);

	enemies = [[], [], [], []];
	wallsAlive = [1, 1, 1, 1];
	walls = [];
	towers = [];
	buttons = [];

	walls.push(new Wall(350, 250, 0));
	walls.push(new Wall(450, 350, 1));
	walls.push(new Wall(350, 450, 0));
	walls.push(new Wall(250, 350, 1));

	towers.push(new Tower(280, 280));
	towers.push(new Tower(390, 280));
	towers.push(new Tower(390, 390));
	towers.push(new Tower(280, 390));

	startTime = millis();
	lastSpawn = millis();
	nextSpawn = millis();

	currentSpawnTime = 5000;

	frameRate(30);

	money = 0;
	globalDamage = 10;

	buttons.push(new Button(20, 70, "Increase Damage - 20g", increaseDamage));

	tutorial = {};
	tutorial.w = 1;
	tutorial.a = 1;
	tutorial.s = 1;
	tutorial.d = 1;
	
	gameOver = 0;
	playerOrb = new PlayerOrb();

	console.log("Starting");
}