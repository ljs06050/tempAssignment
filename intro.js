function intro() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("intro", width / 2, height / 2);
    text("press ENTER to start", width / 2, 3 * height / 4);
    if (keyIsPressed) {
        if (keyCode == ENTER) {
            return 1;
        }
    }
}
