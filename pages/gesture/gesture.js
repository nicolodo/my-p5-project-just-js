let video, classifier;
let label = "Loading model...";
let confidence = 0;

const modelURL = "https://teachablemachine.withgoogle.com/models/_b2rfezt0/";

const emojiMap = {
  phone: "📱",
  bottle: "🧴",
  cup: "🍻",
  dave: "👨‍🦲",
  vape: "🚬",
  crisps: "🍟",
};

function setup() {
  // Canvas is 640x520 (480px for video + 40px for UI)
  createCanvas(640, 520);

  // Create capture without forcing a size to avoid hardware stretching
  video = createCapture(VIDEO);
  video.hide();

  classifier = ml5.imageClassifier(modelURL + "model.json", modelReady);
}

function modelReady() {
  console.log("Model Loaded!");
  if (video) {
    classifier.classifyStart(video, gotResults);
  }
}

function gotResults(results) {
  if (results && results.length > 0) {
    label = results[0].label;
    confidence = results[0].confidence;
  }
}

function draw() {
  background(0);

  // --- 1. Draw Mirrored & Unstretched Video ---
  if (video && video.elt.readyState >= 2) {
    push();
    // Move to the center of the video area (640 / 2, 480 / 2)
    translate(320, 240);
    // Flip horizontally
    scale(-1, 1);

    // Set image mode to center for easy alignment
    imageMode(CENTER);

    // Calculate scaling to fill the 640x480 area (Aspect Fill / "Cover")
    let vW = video.width;
    let vH = video.height;
    let scaleFactor = max(640 / vW, 480 / vH);

    // Draw the video at the center (0,0 relative to our translate)
    image(video, 0, 0, vW * scaleFactor, vH * scaleFactor);
    pop();
  }

  // --- 2. Logic: Resolve Emoji with 90% Threshold ---
  const cleanedLabel = label.trim().toLowerCase();
  let emoji = confidence >= 0.9 ? emojiMap[cleanedLabel] || "❓" : "❓";

  // --- 3. Draw UI ---
  drawInterface(emoji);
}

function drawInterface(emoji) {
  // Reset imageMode for UI drawing
  imageMode(CORNER);

  // Main Emoji Display
  textAlign(CENTER, CENTER);
  textSize(120);
  text(emoji, width / 2, 240);

  // Bottom UI Bar
  noStroke();
  fill(0, 180);
  rect(0, 480, width, 40);

  // Confidence Meter
  if (confidence >= 0.9) {
    fill(0, 255, 100); // Green
  } else {
    fill(255, 150, 0); // Orange
  }
  rect(0, 480, width * confidence, 4);

  // Text Info
  fill(255);
  textSize(16);
  textAlign(LEFT, CENTER);
  let displayText = confidence >= 0.9 ? label : "Scanning...";
  text(
    ` Detected: ${displayText} (${(confidence * 100).toFixed(1)}%)`,
    10,
    500,
  );
}
