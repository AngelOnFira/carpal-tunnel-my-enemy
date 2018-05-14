function draw() {
	background();
	scene();
	HUD();
	var c = color(255, 255, 255);
	fill(c);
}

function background() {
	// Canvas rectangle
	var c = color(0, 0, 0);
	fill(c);
	rect(0,0,700,700);
}

function scene() {

	// Draw the towers
	for (var i = 0; i < towers.length; i++) {
		var thisTower = towers[i];
		var c = color(40, 40, 220);
		
		fill(c);
		noStroke();
		rect(
			thisTower.position.x,
			thisTower.position.y,
			30,
			30
		);
	}
	
	// Draw the enemeies
	for (var lane = 0; lane < 4; lane++) {
		var currEnemy = 0;
		while (currEnemy < enemies[lane].length){
			var thisEnemy = enemies[lane][currEnemy];

			// If this enemy dies
			if (thisEnemy.update()) {
				enemies[lane].splice(currEnemy, 1)
				continue;
			}
			else {
				currEnemy += 1;
			}

			var c = color(
				255 - (thisEnemy.health / 50 * 200 + 40),
				thisEnemy.health / 50 * 200 + 40,
				0
			);

			fill(c);
			noStroke();
			rect(
				int(thisEnemy.position.x - 10),
				int(thisEnemy.position.y - 10),
				20,
				20
			);

			var incProjCount = thisEnemy.incomingProjectiles.length;
			for (var projNum = 0; projNum < incProjCount; projNum++) {
				var thisProj = thisEnemy.incomingProjectiles[projNum];

				var c = color(220, 10, 10);
				fill(c);

				ellipse(thisProj.position.x, thisProj.position.y, 10);
			}
		}
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
}

function HUD() {
	var c = color(255, 255, 255);
	
	fill(c);
	textSize(18);
	text("Gold: " + money, 20, 50);
	
	for (var i = 0; i < buttons.length; i++) {
		var thisButton = buttons[i];
	
		var c = color(255, 255, 255);
		fill(c);
	
		rect(
		thisButton.position.x,
		thisButton.position.y,
		thisButton.size.x,
		thisButton.size.y
		);
	
		var c = color(0, 0, 0);
		fill(c);
	
		textSize(12);
		text("Hi button", thisButton.position.x + 20, thisButton.position.y + 15);
	}
}