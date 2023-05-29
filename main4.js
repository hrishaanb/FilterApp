noseX1 = 0;
noseY1 = 0;
noseX2 = 0;
noseY2 = 0
function preload () {
    lipstick = loadImage("https://i.postimg.cc/1tQm8qZv/lipstick.png");
    mustache = loadImage("https://i.postimg.cc/P5Q8fTZs/mustache.png");
}

function setup () {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw () {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX1, noseY1, 50, 20);
    image(lipstick, noseX2, noseY2, 65, 30);
}

function modelLoaded () {
    console.log("PoseNet is initialized");
}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        noseX1 = results[0].pose.nose.x-25;
        noseY1 = results[0].pose.nose.y+10;
        noseX2 = results[0].pose.nose.x-30;
        noseY2 = results[0].pose.nose.y+20;
        console.log("Nose x: " + noseX1);
        console.log("Nose y: " + noseY1);
    }
}

function mustacheOnOrOff4 () {
    window.location = "indexOffOn.html";
}
function lipstickOnOrOff4 () {
    window.location = "indexOnOff.html";
}
function take_snapshot4 () {
    save("MustacheAndLipstickFilter.png");
}