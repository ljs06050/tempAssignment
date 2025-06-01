function whatIf(startTime) {
    let elapsedTime = millis() - startTime;
    background(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    fill(255);
    text("만약...", width / 2, height / 2);
    return elapsedTime;
}