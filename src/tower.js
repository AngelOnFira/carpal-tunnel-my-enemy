function Tower (x, y, vert) {
	this.position = {};
	this.position.x = x;
	this.position.y = y;
	this.health = 500;
}

Tower.prototype.findTarget = function(lane) {

	var closest = -1;
	var closestIndex = 0;

	for (var i = 0; i < enemies[lane].length; i++) {
		var thisEnemy = enemies[lane][i];
		distance = distNS(
			thisEnemy.position.x,
			thisEnemy.position.y,
			this.position.x,
			this.position.y
		);

		if (distance < closest || closest == -1) {
			closest = distance;
			closestIndex = i;
		}
	}

	if (closest != -1) {
		enemies[lane][closestIndex].shoot(this.position.x, this.position.y);
	}
}

Tower.prototype.fire = function(lane) {

	this.findTarget(lane);
}