function Enemy (spawnLoc) {
	var x, y;

	if (spawnLoc == 0) {
		x = random(250, 450);
		y = -20;
	}
	else if (spawnLoc == 1) {
		x = 720;
		y = random(250, 450);
	}
	else if (spawnLoc == 2) {
		x = random(250, 450);
		y = 720;
	}
	else if (spawnLoc == 3) {
		x = -20;
		y = random(250, 450);
	}

	this.lane = spawnLoc;
	this.position = {};
	this.position.x = float(x);
	this.position.y = float(y);
	this.health = 50;

	this.incomingProjectiles = [];
	this.speed = 1;
}

Enemy.prototype.update = function() {

	this.move();
	this.updateIncomingProjectiles();

	// If this unit dies
	if (this.checkAlive()) {
		return 1;
	}
}
 
Enemy.prototype.move = function() {
	
	var movement = calcMovement(
		this.position.x,
		this.position.y,
		350,
		350,
		this.speed
	);

	this.position.x += movement[0];
	this.position.y += movement[1];
};

Enemy.prototype.checkAlive = function() {

	if (this.health <= 0) {
		money += 1;
		return 1;
	}
	
	if (this.lane == 0) {
		if (this.position.y > 250) {
			this.die();
			return 1;
		}
	}
	else if (this.lane == 1) {
		if (this.position.x < 450) {
			this.die();
			return 1;
		}
	}
	else if (this.lane == 2) {
		if (this.position.y < 450) {
			this.die();
			return 1;
		}
	}
	else if (this.lane == 3) {
		if (this.position.x > 250) {
			this.die();
			return 1;
		}
	}

	// The unit did not die
	return 0;
}

Enemy.prototype.die = function() {
	
	if (wallsAlive[this.lane]) {
		walls[this.lane].health -= 2;
		if (walls[this.lane].update) {
			splice(walls[this.lane, 1]);
			wallsAlive[this.lane] = 0;
		}
	}
	else {
		gameOver = 1;
	}
}

Enemy.prototype.shoot = function(startX, startY) {

	this.incomingProjectiles.push(new Projectile(startX + 15, startY + 15, globalDamage));
}

Enemy.prototype.updateIncomingProjectiles = function() {

	var currProjectile = 0;
	while (currProjectile < this.incomingProjectiles.length){

		var thisBullet = this.incomingProjectiles[currProjectile];

		// Update the projectile and see if this takes damage
		if (thisBullet.update(this.position.x, this.position.y)) {
			this.health -= thisBullet.damage;
			this.incomingProjectiles.splice(currProjectile, 1);
			continue;
		}
		else {
			currProjectile++; 
		}
	}
}