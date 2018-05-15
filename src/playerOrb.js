function PlayerOrb (x, y, vert) {
	this.health = 500;
}

PlayerOrb.prototype.takeDamage = function(damage) {
    this.health -= damage;

    if (this.health <= 0) {
        this.die();
    }
}

PlayerOrb.prototype.die = function() {
    gameOver = 1;
}