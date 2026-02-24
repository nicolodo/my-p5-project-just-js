function setup() {
    createCanvas(600, 400);
}

function draw() {
    gettingStarted1()
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
    
}
