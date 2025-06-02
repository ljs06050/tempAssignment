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
    rect(0, 0, width / 30, height / 60, 2);
    fill(255, 50, 0);
    rect(width / 30, 0, width / 120, height / 60, 1);
    pop();
}

function mousePressed() {
    let w = width / 30;
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
    
    // 3D 효과를 위한 상수
    let depthFactor = trashW * 0.3;   // 쓰레기통의 "깊이감"
    let rimWidth = 6;                 // 상단 테두리 너비
    let shadowOpacity = 80;           // 그림자 투명도
    
    // 그림자 그리기
    noStroke();
    fill(0, 0, 0, shadowOpacity);
    ellipse(trashX + trashW/2, trashY + trashH + 5, trashW * 0.8, depthFactor/2);
    
    // 쓰레기통 뒷면 그리기 (3D 효과)
    fill(130);  // 뒷면은 더 어두운 색상
    stroke(80);
    strokeWeight(1);
    // 뒷면 - 약간 오프셋을 주어 3D 느낌 부여
    rect(trashX + depthFactor/6, trashY - depthFactor/6, trashW - depthFactor/3, trashH, 10);
    
    // 측면 패널 그리기 (원근감 효과)
    fill(160);
    beginShape();
    vertex(trashX, trashY + trashH - 10);  // 왼쪽 하단 전면
    vertex(trashX + depthFactor/6, trashY + trashH - 10); // 왼쪽 하단 후면
    vertex(trashX + depthFactor/6, trashY); // 왼쪽 상단 후면
    vertex(trashX, trashY); // 왼쪽 상단 전면
    endShape(CLOSE);
    
    beginShape();
    vertex(trashX + trashW, trashY + trashH - 10);  // 오른쪽 하단 전면
    vertex(trashX + trashW - depthFactor/6, trashY + trashH - 10); // 오른쪽 하단 후면
    vertex(trashX + trashW - depthFactor/6, trashY); // 오른쪽 상단 후면
    vertex(trashX + trashW, trashY); // 오른쪽 상단 전면
    endShape(CLOSE);
    
    // 몸체 그리기
    fill(180);
    stroke(100);
    strokeWeight(1.5);
    rect(trashX, trashY, trashW, trashH, 10); // 전면
    
    // 상단 테두리 추가 (깊이감)
    fill(150);
    rect(trashX - rimWidth/2, trashY - rimWidth/2, trashW + rimWidth, rimWidth, 5);
    
    // 그라데이션과 3D 효과로 뚜껑 그리기
    // 먼저, 뒤쪽 호 그리기
    fill(120);
    arc(trashX + trashW / 2, trashY, trashW - depthFactor/3, 40, PI, 0, CHORD);
    
    // 메인 뚜껑 그리기
    fill(150);
    arc(trashX + trashW / 2, trashY, trashW, 40, PI, 0, CHORD);
    
    // 3D 효과를 위한 뚜껑 하이라이트 추가
    noFill();
    stroke(220, 220, 220, 150);
    strokeWeight(2);
    arc(trashX + trashW / 2, trashY, trashW * 0.8, 30, PI+0.3, TWO_PI-0.3);
    
    // 뚜껑에 손잡이 추가
    fill(100);
    noStroke();
    rect(trashX + trashW/2 - 15, trashY - 5, 30, 3, 2);
    
    // 전면에 미묘한 텍스처 패턴 추가
    strokeWeight(0.3);
    stroke(160);
    for (let i = 0; i < 5; i++) {
        line(
            trashX + trashW * 0.2, 
            trashY + trashH * 0.3 + i * (trashH * 0.1), 
            trashX + trashW * 0.8, 
            trashY + trashH * 0.3 + i * (trashH * 0.1)
        );
    }
    
    pop();
}
