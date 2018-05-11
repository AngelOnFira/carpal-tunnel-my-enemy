function Wall (x, y, vert) {
    this.vert = vert;
    this.position = {};
    this.position.x = x;
    this.position.y = y;

    this.dims = {};
    if (vert) {
        this.dims.x = 20;
        this.dims.y = 100;
    }
    else {
        this.dims.x = 100;
        this.dims.y = 20;
    }
}
 
Enemy.prototype.createEntity = function() {
    return this.color + ' ' + this.type + ' apple';
};