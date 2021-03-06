function Button (x, y, text, onTrigger) {
	this.position = {};
	this.position.x = x;
	this.position.y = y;

	this.size = {};
	this.size.x = 160;
	this.size.y = 20;

	this.text = text;
	this.onTrigger = onTrigger;
}

Button.prototype.checkTriggered = function() {

	if (mouseX > this.position.x &&
		mouseX < this.position.x + this.size.x &&
		mouseY > this.position.y &&
		mouseY < this.position.y + this.size.y
	){
		this.onTrigger();
	}
}

function increaseDamage() {
	if (money >= 20) {
		money -= 20;
		globalDamage += 5;
	}
}