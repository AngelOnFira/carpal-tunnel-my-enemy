function Enemy (type) {
    this.type = type;
    this.color = "red";
    this.position = {};
    this.position.x = Math.random() * 400;
    this.position.y = Math.random() * 400;
}
 
Enemy.prototype.move = function() {
    center = {
        x = displayWidth / 2,
        y = displayHeight / 2
    };
    
};