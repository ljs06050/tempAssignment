let sceneNum = 0;
let sceneStartTime;
let isDragging = false;

function preload() {
    handPose = ml5.handPose();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    grassBg = createGraphics(width, height);
    angle = radians(10);
    cigX = width / 2;
    cigY = 0;
    footY = -200;
    Grass(grassBg);

    video = createCapture(VIDEO);
    video.size(windowWidth, windowHeight);
    video.hide();
    handPose.detectStart(video, gotHands);
    x = width;
    y = height;

    trashW = width / 10;
    trashH = height / 3;
    trashX = 3 * width / 4;
    trashY = height / 2;
    scene6CigX = width / 2;
    scene6CigY = height / 2;
    sceneStartTime = millis();
}

function draw() {
    switch (sceneNum) {
        case 0:
            if (intro()) {
                sceneNum = 1;
            }
            break;
        case 1:
            if (scene1() > 5000) {
                sceneStartTime = millis();
                sceneNum = 2;
            }
            break;
        case 2:
            if (scene2(sceneStartTime) > 5000) {
                sceneStartTime = millis();
                sceneNum = 3;
            }
            break;
        case 3:
            if (scene3(sceneStartTime)) {
                sceneStartTime = millis();
                sceneNum = 4;
            }
            break;
        case 4:
            if (scene4(sceneStartTime) > 5000) {
                sceneStartTime = millis();
                sceneNum = 5;
            }
            break;
        case 5:
            if (scene5(sceneStartTime) > 10000) {
                sceneStartTime = millis();
                sceneNum = 7;
            }
            break;
        case 6:
            if (scene6()) {
                sceneNum = 8;
            }
            break;
        case 7: //만약... 부분
            if (whatIf(sceneStartTime) > 2000) {
                sceneNum = 6;
            }
            break;
        case 8: // ending credit
            endingCredit();
            break;
    }
}