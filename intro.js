function intro() {
    background(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    fill(255);
    text("intro", width / 2, height / 2);
    if (keyIsPressed) {
        if (keyCode == ENTER) {
            return 1;
        }
    }
}