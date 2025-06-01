function scene2(startTime) {
    let elapsedTime = millis() - startTime;
    image(grassBg, 0, 0);
    Cigarette1(cigX, cigY);
  
    if (frameCount > 60 && frameCount % 6 === 0) {
        for (let y = fireStartY - fireHeight; y < fireStartY; y += 30) {
            for (let x = fireStartX - fireSpreadWidth; x <= fireStartX + fireSpreadWidth; x += 25) {
            scene1Particles.push(new Particle(x, y));
            }
        }
        fireHeight += 10;
        fireSpreadWidth += 5;
    }
  
    for (let i = scene1Particles.length - 1; i >= 0; i--) {
        scene1Particles[i].update();
        scene1Particles[i].show();
        if (scene1Particles[i].finished()) {
            scene1Particles.splice(i, 1);
        }
    }
    return elapsedTime;
}