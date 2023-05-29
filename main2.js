noseX = 0;
noseY = 0;
function preload () {
    img = loadImage("https://i.postimg.cc/1tQm8qZv/lipstick.png");
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
    image(img, noseX, noseY, 65, 30);
}

function modelLoaded () {
    console.log("PoseNet is initialized");
}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-30;
        noseY = results[0].pose.nose.y+20;
        console.log("Nose x: " + noseX);
        console.log("Nose y: " + noseY);
    }
}

function mustacheOnOrOff2 () {
    window.location = "indexOnOn.html";
}
function lipstickOnOrOff2 () {
    window.location = "index.html";
}
function take_snapshot2 () {
    save("LipstickFilter.png");
}
