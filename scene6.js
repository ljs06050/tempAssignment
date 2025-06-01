let scene6CigX, scene6CigY;
let offsetX = 0;
let offsetY = 0;

function scene6() {
    image(grassBg, 0, 0);
    Cigarette6(scene6CigX, scene6CigY);
    drawTrashCan();
    if (isDragging) {
        scene6CigX = mouseX - offsetX;
        scene6CigY = mouseY - offsetY;
        if (mouseX > trashX && mouseX < trashX + trashW && mouseY > trashY - 20 && mouseY < trashY) {
            return 1;
        }
    }
}

function Grass(pg) {
    pg.background(34, 139, 34);
    pg.stroke(20, 110, 20);
    pg.strokeWeight(1.5);
    pg.noFill();

    for (let i = 0; i < 600; i++) {
        let gx = random(pg.width);
        let gy = random(pg.height);
        let h = random(10, 25);
        pg.beginShape();
        pg.vertex(gx, gy);
        pg.quadraticVertex(gx - 2, gy - h / 2, gx, gy - h);
        pg.endShape();
    }

    for (let i = 0; i < 300; i++) {
        let gx = random(pg.width);
        let gy = random(pg.height);
        pg.line(gx, gy, gx - 2, gy - 15);
        pg.line(gx, gy, gx + 2, gy - 15);
    }
}

function Cigarette6(x, y) {
    push();
    translate(x, y);
    noStroke();
    fill(255);
    rect(0, 0, width / 20, height / 60, 2);
    fill(255, 50, 0);
    rect(width / 20, 0, width / 120, height / 60, 1);
    pop();
}

function mousePressed() {
    let w = width / 20;
    let h = height / 60;

    // 마우스가 담배 안에 있는지 확인
    if (mouseX > scene6CigX && mouseX < scene6CigX + w &&
        mouseY > scene6CigY && mouseY < scene6CigY + h) {
        isDragging = true;
        offsetX = mouseX - scene6CigX;
        offsetY = mouseY - scene6CigY;
    }
}

function mouseReleased() {
    isDragging = false;
}

function drawTrashCan() {
    push();
    rectMode(CORNER);
    stroke(100);
    fill(180);
    rect(trashX, trashY, trashW, trashH, 10); // 몸체

    // 뚜껑
    fill(150);
    arc(trashX + trashW / 2, trashY, trashW, 40, PI, 0, CHORD);
    pop();
}