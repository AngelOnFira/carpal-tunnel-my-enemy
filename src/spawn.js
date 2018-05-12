function spawn() {

    var spawnNum = random([0, 1, 2, 3]);
    if (millis() - lastSpawn > currentSpawnTime) {
        enemies[spawnNum].push(new Enemy(spawnNum));
        lastSpawn = millis();
    }
}