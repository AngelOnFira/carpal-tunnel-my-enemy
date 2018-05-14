// Calculate the non square rooted distance between two points
function distNS(x1, y1, x2, y2) {
	var distance = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
	return distance;
}

// Calculate the square rooted distance between two points
function distS(x1, y1, x2, y2) {
	var distance = Math.sqrt(distNS(x1, y1, x2, y2));
	return distance;
}

// Calculate the (x, y) needed to move towards a target
function calcMovement(thisX, thisY, targetX, targetY, velocity) {
	var deltaX = targetX - thisX;
	var deltaY = targetY - thisY;

	var distance = distS(thisX, thisY, targetX, targetY);

	var xMovement = deltaX / distance * velocity;
	var yMovement = deltaY / distance * velocity;

	var combMovement = [xMovement, yMovement];

	return combMovement;
}