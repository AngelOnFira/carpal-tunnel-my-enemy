function Wall (x, y, vert) {
	this.vert = vert;
	this.position = {};
	this.position.x = x;
	this.position.y = y;
	this.health = 500;

	this.dims = {};
	if (vert) {
		this.dims.x = 10;
		this.dims.y = 100;

		this.position.x -= 5;
		this.position.y -= 50;
	}
	else {
		this.dims.x = 100;
		this.dims.y = 10;

		this.position.x -= 50;
		this.position.y -= 5;
	}
}