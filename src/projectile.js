function Projectile (x, y, damage) {
    this.position = {};
    this.position.x = x;
    this.position.y = y;
    this.damage = damage;
}

Projectile.prototype.update = function(targetX, targetY) {
    var movement = calcMovement(
        this.position.x,
        this.position.y,
        targetX,
        targetY,
        10
    );

    this.position.x += movement[0];
    this.position.y += movement[1];

    var distToParent = distNS(
        this.position.x,
        this.position.y,
        targetX,
        targetY
    );

    if (distToParent < 100) {
        return 1;
    }
    return 0;
}