// sketch1.js
let video;
let handpose;
let predictions = [];
let prevX = null;
let prevY = null;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  handpose = ml5.handpose(video, () => console.log("Handpose model loaded!"));
  handpose.on("predict", (results) => (predictions = results));

  background(255);
}

function draw() {
  image(video, 0, 0, width, height);

  if (predictions.length > 0) {
    const landmarks = predictions[0].landmarks;
    const indexTip = landmarks[8];

    if (prevX !== null && prevY !== null) {
      stroke(0);
      strokeWeight(5);
      line(prevX, prevY, indexTip[0], indexTip[1]);
    }

    prevX = indexTip[0];
    prevY = indexTip[1];
  }
}

function goHome() {
  window.location.href = "index.html";
}

function clearCanvas() {
  background(255);
}
