
noseX = 0;
noseY = 0;
function preload () {
    img = loadImage("https://i.postimg.cc/P5Q8fTZs/mustache.png");
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
    image(img, noseX, noseY, 50, 20);
}

function modelLoaded () {
    console.log("PoseNet is initialized");
}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y+10;
        console.log("Nose x: " + noseX);
        console.log("Nose y: " + noseY);
    }
}

function mustacheOnOrOff3 () {
    window.location = "indexOffOff.html";
}
function lipstickOnOrOff3 () {
    window.location = "indexOnOn.html";
}
function take_snapshot3 () {
    save("MustacheFilter.png");
}