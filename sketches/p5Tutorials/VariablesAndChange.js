let cloudOneX = 50;
let cloudWidth = 80;

// custom variable for shooting stars
let lineXone = 0;
let lineYone = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    mountainsAtNight()
}

function mountainsAtNight(){
    let skyColour = "#200d83"
    background(skyColour) //black?
    // frameRate(15); // set frame rate to 15

    // shooting star
    stroke("yellow")
    line(lineXone, lineYone, lineXone + 30, lineYone -30)

    // moon 
    fill("#fff")
    circle(width*(7/8), height*(1/8), width*(2/8))
    stroke(skyColour)
    fill(skyColour)
    circle(width*(6.5/8), height*(1/8), width*(2/8))

    // mountains
    stroke("#000")
    fill("#3e496a")
    triangle(width*(-1/8), height*(6/8), width*(4/8), height*(6/8), width*(1/8), height*(2/8))
    let Mtn2Xshift = 3 // 3 eights Mountain
    triangle(width*((-1+Mtn2Xshift)/8), height*(6/8), width*((4+Mtn2Xshift)/8), height*(6/8), width*((1+Mtn2Xshift)/8), height*(2/8))

    // grass
    fill("rgb(28, 88, 31)")
    rect(width*(0/8),height*(6/8), width, height)

    // growing tree
    // trunk
    fill("rgb(118,80,72)")
    rect( 40, 270, 15, 50)
    // leaves
    fill("green")
    triangle( 25, 270, 45, 240 - frameCount % 290, 70, 270)
    // growing tree 2
    // trunk
    fill("rgb(118,80,72)")
    rect(340, 330, 15, 50)
    // leaves
    fill("green")
    triangle(325, 330, 345, 240 - frameCount % 290, 370, 330)

    // cloud
    fill(255);
    let cloudOneX = ((frameCount) % (width+2*cloudWidth)) - cloudWidth;
    ellipse(cloudOneX,50,cloudWidth,40)
    ellipse(cloudOneX - 40, 100, 60, 20)
    ellipse(cloudOneX + 20, 150, 40, 10)
    
    // set shooting star to a random location
    lineXone = random(0, width);
    lineYone = random(0, height/2);

    // displays the x and y position of the mouse on the canvas
    fill(255) //white
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`,20,20);

}