let scene5Particles = [];

function scene5(startTime) {
    let elapsedTime = millis() - startTime;
    background(193, 184, 179);
    drawScene5Mountains(width, height);
    
    //탄 나무
    drawBurntTree(0.75 * width, 0.8 * height, 0.06 * height);
    drawBurntTree(0.88 * width, 0.95 * height, 0.08 * height);
    drawBurntTree(0.25 * width, 0.7 * height, 0.07 * height);
    drawBurntTree(0.7 * width, 0.6 * height, 0.09 * height);
    drawBurntTree(0.14 * width, 0.8 * height, 0.08 * height);
    drawBurntTree(0.5 * width, 0.9 * height, 0.07 * height);
    drawBurntTree(0.3 * width, 0.85 * height, 0.06 * height);
    drawBurntTree(0.45 * width, 0.75 * height, 0.08 * height);
    drawBurntTree(0.35 * width, 0.6 * height, 0.09 * height);
    drawBurntTree(0.2 * width, 0.93 * height, 0.1 * height);
    drawBurntTree(0.6 * width, 0.8 * height, 0.07 * height);
    drawBurntTree(0.9 * width, 0.8 * height, 0.1 * height);
    drawBurntTree(0.58 * width, 0.55 * height, 0.09 * height);
    drawBurntTree(0.45 * width, 0.5 * height, 0.06 * height);
    drawBurntTree(0.55 * width, 0.35 * height, 0.07 * height);

    //연기
    drawSmoke(width / 1.5, 1.6 * height);
    drawSmoke(width / 2, 0.8 * height);
    drawSmoke(3.2 * width / 4, 1.1 * height);
    drawSmoke(width / 4, 1.3 * height);

    return elapsedTime;
}
function drawScene5Mountains(x, y) {
    push();
    noStroke();

    // 탄 산 색상 (짙은 회색 계열)
    fill(40); // 뒷편 산
    triangle(x * -0.1, y, x * 0.48, y * 0.2, x * 0.5, y);
    fill(50); // 산 중앙
    triangle(x / 10, y, x / 2, y / 10, x - (x / 10), y);
    fill(30); // 산 왼쪽
    triangle(x / 10 - (x / 14), y, x / 3, y / 2.5, x * (5 / 6), y);
    triangle(x / 2, y, x / 1.4, y / 3, x + (x / 10), y); // 산 오른쪽

    // 산책로 (잿빛 느낌)
    strokeWeight(15);
    stroke(100); // 연한 회색
    line(x / 2.5, y / 1.1, x / 1.7, y);
    stroke(120); // 밝은 회색
    line(x / 2.3, y / 1.2, x / 2.5, y / 1.1);
    stroke(140); // 거의 흰색
    line(x / 2.7, y / 1.4, x / 2.3, y / 1.2);
    line(x / (2.3), y / 1.8, x / 2.7, y / 1.4);
    pop();
}

function drawSmoke(xPos, yPos) {
    push();
    noStroke();
    if (random(1) > 0.8) {
        let x = xPos + random(-10, 10);
        let y = yPos / 1.8 + random(-5, 5);
        scene5Particles.push(new SmokeParticle(x, y));
    }

    for (let i = scene5Particles.length - 1; i >= 0; i--) {
        scene5Particles[i].update();
        scene5Particles[i].show();

        if (scene5Particles[i].isFinished()) {
            scene5Particles.splice(i, 1);
        }
    }
    pop();
}
class SmokeParticle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-0.01, 0.01), random(-0.2, -0.1));
        this.acc = createVector(random(-0.001, 0.001), random(-0.0001, -0.000));
        this.size = random(15, 30);
        this.lifetime = random(80, 120);
        this.initialLifetime = this.lifetime;
    }

    update() {
        this.vel.add(this.acc);  // 가속도 적용
        this.pos.add(this.vel);  // 속도 적용
        this.size += 0.02;        // 점점 커지게
        this.lifetime -= 0.3;    // 알파 감소 속도
    }

    isFinished() {
        return this.lifetime <= 0;
    }

    show() {
        let alpha = map(this.lifetime, 0, this.initialLifetime, 0, 100);

        fill(152, 142, 143, alpha);
        ellipse(this.pos.x, this.pos.y, this.size);
    }
}

function drawBurntTree(xPos, yPos, treeHeight) {
    push();
    stroke(15);
    strokeWeight(4);
    line(xPos, yPos, xPos, yPos - treeHeight);
    strokeWeight(2);
    line(xPos, yPos - treeHeight * 0.3, xPos - treeHeight * 0.2, yPos - treeHeight * 0.4);
    line(xPos, yPos - treeHeight * 0.5, xPos + treeHeight * 0.2, yPos - treeHeight * 0.6);
    line(xPos, yPos - treeHeight * 0.7, xPos - treeHeight * 0.16, yPos - treeHeight * 0.8);
    pop();
}