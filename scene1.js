let timerStarted = false;
let startTime = 0;
let elapsedTime = 0;

let cigX, cigY, dropped = false;
let footY, stepTriggered = false;
let showFireCircle = true;

let angle, fireStartX, fireStartY;
let grassBg;

let scene1Particles = [];
let fireSpreadWidth = 0;
let fireHeight = 0;

function scene1() {
    image(grassBg, 0, 0);
    Cigarette1(cigX, cigY);
    dropCigarette();
    Foot(cigX + 25, footY);
    handleStep();

    fireStartX = cigX + 50 * cos(angle);
    fireStartY = cigY + 50 * sin(angle) - 10;

    if (showFireCircle) {
        FireParticle(fireStartX, fireStartY);
    }

    if (stepTriggered && !timerStarted && dropped) {
        startTime = millis();
        timerStarted = true;
    }

    if (timerStarted) {
        elapsedTime = millis() - startTime;
    }

    fill(255);
    textSize(20);
    textAlign(CENTER);
    return elapsedTime;
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

function Cigarette1(x, y) {
    push();
    translate(x - 10, y);
    rotate(angle);

    noStroke();
    fill(255);
    rect(0, 0, 40, 12, 2);
    fill(255, 50, 0);
    rect(40, 0, 8, 12, 1);
    pop();
}

function FireParticle(x, y) {
  noStroke();
  fill(255, 140, 0, 200);
  ellipse(x - 10, y + 10, 17);
}

function dropCigarette() {
  if (!dropped && cigY < height * 0.4) {
    cigY += 3;
  } else {
    dropped = true;
  }
}

function Foot(x, y) {
  push();
  translate(x + 40, y);
  rotate(angle);

  fill(50, 100, 180);
  rect(-30, -height, 70, height);

  fill(0);
  beginShape();
  ellipse(-25, 40, 40, 20);
  rect(-20, 0, 50, 15);
  vertex(-15, 10);
  vertex(30, 15);
  vertex(-15, 50);
  vertex(-40, 40);
  endShape(CLOSE);

  pop();
}

function handleStep() {
  if (stepTriggered && footY < cigY - 30) {
    footY += 5;
  }

  if (stepTriggered && footY >= cigY - 30) {
    showFireCircle = false;
  }
}

function keyPressed() {
  if (key === ' ') {
    stepTriggered = true;
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
    this.d = random(20, 40);
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.alpha -= 1.2;
    this.d += 0.05;
  }

  show() {
    noStroke();
    fill(random(200, 230), random(50, 150), 10, this.alpha);
    ellipse(this.x, this.y, this.d);
  }
}

function reset() {
    scene1Particles = [];
    fireSpreadWidth = 0;
    fireHeight = 0;
    fireStartX = cigX + 50 * cos(angle);
    fireStartY = cigY + 50 * sin(angle) - 10;
}
