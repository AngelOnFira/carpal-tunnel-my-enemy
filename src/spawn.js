function Spawn (type) {
    this.type = type;
    this.color = "red";
    this.position = {};
    this.position.x = Math.random() * 400;
    this.position.y = Math.random() * 400;
}
 
Enemy.prototype.createEntity = function() {
    return this.color + ' ' + this.type + ' apple';
};