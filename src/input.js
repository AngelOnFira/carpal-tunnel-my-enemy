function checkInput() {
	if (mouseIsPressed) {
		if (mouseButton === LEFT) {
			console.log("checking");
			for (var i = 0; i < buttons.length; i++) {
				var thisButton = buttons[i];
				thisButton.checkTriggered();
			}
		}
	}
}

function keyPressed() {

	if (keyCode == 65 || keyCode == 97) {
		// Left

		towers[0].fire(3);
		towers[3].fire(3);
	}

	if (keyCode == 87 || keyCode == 119) {
		// Up

		towers[0].fire(0);
		towers[1].fire(0);
	}

	if (keyCode == 68 || keyCode == 100) {
		// Right

		towers[1].fire(1);
		towers[2].fire(1);
	}

	if (keyCode == 83 || keyCode == 115) {
		// Down

		towers[2].fire(2);
		towers[3].fire(2);
	}
}