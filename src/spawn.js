function spawn() {

    var spawnNum = 1;
    if (millis() - lastSpawn > currentSpawnTime) {
        enemies.push(new Enemy(spawnNum));
        lastSpawn = millis();
    }
}