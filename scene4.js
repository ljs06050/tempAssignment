function scene4(startTime) {
    background(255);
    let elapsedTime = millis() - startTime;
    let centerX = width / 2;
    let bottomY = height / 2 + 80;
    let nestWidth = 150;
    let nestHeight = 60;

    stroke(40, 30, 20);
    strokeWeight(1.5);

    for (let i = 0; i < 200; i++) {
        let startX = centerX + random(-nestWidth / 3, nestWidth / 3);
        let startY = bottomY + random(-10, 5);

        let endX;
        let endY;

        let currentHeight = random(0, nestHeight);
        endY = bottomY - currentHeight;

        let currentWidth = map(currentHeight, 0, nestHeight, nestWidth / 2, nestWidth / 4);
        endX = centerX + random(-currentWidth, currentWidth);

        startY = startY + random(-5, 5);
        endY = endY + random(-5, 5);

        endX = endX + random(-10, 10);

        line(startX, startY, endX, endY);
    }

    stroke(30, 25, 20, 180);
    strokeWeight(1);

    let innerNestWidth = nestWidth * 0.6;
    let innerNestHeight = nestHeight * 0.7;

    for (let i = 0; i < 150; i++) {
        let startX = centerX + random(-innerNestWidth / 2, innerNestWidth / 2);
        let startY = bottomY + random(-innerNestHeight, 0);

        let len = random(3, 10);
        let angle = random(-PI / 4, PI / 4);

        let endX = startX + cos(angle) * len + random(-5, 5);
        let endY = startY + sin(angle) * len + random(-5, 5);

        line(startX, startY, endX, endY);
    }

    stroke(30, 25, 20);
    strokeWeight(30);
    line(0, height - 15, width, height - 15);
    strokeWeight(1);

    stroke(25, 20, 15);
    for (let i = 0; i < 200; i++) {
        let x = random(width);
        let y = height - random(5, 25);
        let len = random(3, 8);
        let angle = random(-PI / 8, PI / 8);

        let x2 = x + cos(angle) * len;
        let y2 = y + sin(angle) * len;
        line(x, y, x2, y2);
    }

    return elapsedTime;
}