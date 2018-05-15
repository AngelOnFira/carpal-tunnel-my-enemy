function spawn() {

	var spawnNum = random([0, 1, 2, 3]);
	if (nextSpawn < millis()) {
		for (var i = 0; i < 4; i++) {
			if (random(0, 1) > 0.5) {
				enemies[i].push(new Enemy(i));
			}
		}

		nextSpawn = millis() + 2000 - ((millis() - startTime) / 100);
		lastSpawn = millis();
	}
}