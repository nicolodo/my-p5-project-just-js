// Add some header info
// For TM template code

// Video
let video;

let label = 'waiting...'; // this is a var that we use to display info to the canvas

let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/bG1cCler2/'

// STEP 1: Load the model!

function preload() { // preload preloads whatever you put in it before the program starts
  // Add 'model.json' to the end of your URL
  classifier = ml5.imageClassifier( modelURL + 'model.json'); // In addition to pasting the link given by teachable machine I have also had to specify using model.json. without which I get a fetch error.
  //classifier stores the model we just trained
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify!
function classifyVideo() {
//   this function calls the ml5 classify function on the video
  classifier.classify(video, gotResults);
//   the function "classify()" classifies an image
//   the first function says the img its classifying
//   gotResults is a callback function that we write that is supposed to give us back a guess as to what it's identified
}

function draw() {
  background(0);
  
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(32); 
  textAlign(CENTER, CENTER); // ?
  fill(255); //colours the text white
  text(label, width/2, height - 16);
}


// STEP 3: Get the classification!
function gotResults(error, results){
//   this function either returns Idk what that is(error)or its that(results)!
  if (error) {
    console.error(error);
    return 
//     if there's an error jump me out of the function
  }
    // console.log(results);
    label = results[0].label + str(int(results[0].confidence * 100)  +"%") 
    classifyVideo(); //classifyVideo calls gotResults
      //gotResults calls classifyVideo in a loop
}
  
  
//   if (currentGesture == 'fingerGuns') {
//     pongPaddleUp = True;
//   }


function goHome() {
  window.location.href = "index.html";
}
