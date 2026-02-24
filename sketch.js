

function setup() {
    createCanvas(400, 400);
}

function draw() {
    // gettingStarted1()
    // variablesAndChange()
}

function gettingStarted1(){
    // sky blue background
    background(135,206,235);
    // sun in top-right corner
    fill("yellow")
    stroke("orange") // make outline orange
    strokeWeight(20) // make outline 20px
    circle(550, 50,100);

    // Draw grass
    stroke(0) //outline
    strokeWeight(1) //outline 1px
    fill("green") //colour green
    rect(0, 200,600,200) //from (0,200)xy draw a 600 by 200 block
    
    ellipse(100, 100, 50, 50)
    square(100, 100, 100)
    triangle(100,100,150,150,50,150)
    line(400,400,300,300)
    fill("blue")
    arc(200, 200, 40, 400, 0, 1.6*PI)

    // emojis
    textSize(100)
    text("bottom text", sin(mouseX)*mouseX, sin(mouseY)*mouseY)
    textSize(25)
    text("🌠", mouseY, mouseX)
    textSize(80)
    text("🌠", 350, 200)

}

function variablesAndChange(){
    background(220);
    //Place code here
    
    /* places the x a y position of the mouse
    on the canvas as a coordinate pair x, y */
    fill(0)
    text(`${mouseX}, ${mouseY}`, 20, 20);
}

function mountainsAtNight(){
    let skyColour = "#200d83"
    background(skyColour) //black?

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

    // displays the x and y position of the mouse on the canvas
    fill(255) //white
    text(`mouseX: ${mouseX}, mouseY: ${mouseY}`,20,20);

    // cloud
    fill(255);
    ellipse(50,50,80,40)
}