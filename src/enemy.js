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
    this.position.x = x;
    this.position.y = y;
    this.health = 50;

    this.incomingProjectiles = [];
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
    
    if (this.lane == 0) {
        this.position.y += 1;
    }
    else if (this.lane == 1) {
        this.position.x -= 1;
    }
    else if (this.lane == 2) {
        this.position.y -= 1;
    }
    else if (this.lane == 3) {
        this.position.x += 1;
    }
};

Enemy.prototype.checkAlive = function() {

    if (this.health <= 0) {
        this.die();
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
    
    walls[this.lane].health -= 30;
}

Enemy.prototype.shoot = function() {
    this.incomingProjectiles.push(new Projectile());
}

Enemy.prototype.updateIncomingProjectiles = function() {
    for (var i = 0; i < incomingProjectiles.length; i++) {
        var thisBullet = this.incomingProjectiles[i];

        // Update the projectile and see if this takes damage
        if (thisBullet.update(this.position.x, this.position.y)) {
            this.health -= thisBullet.damage;
        }
    }
}