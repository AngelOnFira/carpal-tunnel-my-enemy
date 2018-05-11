function Enemy (spawnLoc) {
    this.position = {};
    this.position.x = 100;
    this.position.y = 100;
}

Enemy.prototype.update = function() {
    this.move();
}
 
Enemy.prototype.move = function() {
    this.position.y += 1;
};