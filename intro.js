function intro() {
    push();
    background(0);
    textAlign(CENTER, CENTER);
    textSize(100);
    fill(255);
    text("intro", width / 2, height / 2);
    textSize(50);
    text("press ENTER to start", width / 2, 3 * height / 4);
    if (keyIsPressed) {
        if (keyCode == ENTER) {
            return 1;
        }
    }
    pop();
}
