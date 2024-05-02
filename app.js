function setup() {
    createCanvas(windowWidth, windowHeight);
    
    squareOne = new enemySquare(400, 800, 100)
    squareTwo = new enemySquare(200, 500, 150)
    levelOne = new levelDesign(new enemySquare(400, 800, 70), new base(), new player())
    
}
  
function draw() {

    // level one
    levelOne.loadItems()
    
    levelOne.handlemove()

    
    
    // spawn enemy object and make move.
    squareOne.spawn()
    squareOne.move()

    squareTwo.spawn()
    squareTwo.move()

    
}

function mousePressed() {    // if mouse presses square, cut.

    if (dist(mouseX, mouseY, squareOne.positionX, squareOne.positionY) <= 100) {
    squareOne.incrementCuts()
    console.log(`position x: ${squareOne.positionX}, positionY: ${squareOne.positionY}\n mousX: ${mouseX}, mouseY: ${mouseY}`)
    }
    if (dist(mouseX, mouseY, squareTwo.positionX, squareTwo.positionY) <= 100){
        squareTwo.incrementCuts()
    }
}



  




function loadUser(){
    
 
    

}



class levelDesign {
    //TO-DO: constructor
    //states: level color,
    //
    constructor(square, base, player){
        this.square = square
        this.player = player
        this.base = base
    }
    


    loadItems(){
        this.loadColor()
        this.loadPlayer()
        this.loadGUI()
        
    }

    loadColor(){
        background('rgb(119,255,119)')
    }

    
    loadPlayer(){
        strokeWeight(10)
        point(mouseX, mouseY)
    }

    loadGUI() {
        //buttons
        strokeWeight(1)
        square(20, 20, 50)
        square(100, 20, 50)
        square(180, 20, 50)
        square(260, 20, 50)
        fill(0, 0); // lets squares be overlapped by cursor.
    }

    handlemove() {
        this.square.spawn()
        this.square.move()
    }

   
}

class enemySquare {
    constructor(positionX, positionY, size)
    {   
        this.positionX = positionX
        this.positionY = positionY
        this.size = size
        this.cuts = 0

    }

  

    
    spawn(){
        
        switch (this.cuts){
            case 1:
                square(this.positionX, this.positionY, this.size, 50, 0, 0, 0)
                break;
            case 2:
                square(this.positionX, this.positionY, this.size, 50, 50, 0, 0)
                break;
            case 3:
                square(this.positionX, this.positionY, this.size, 50, 50, 50, 0)
                break;
            case 4:
                square(this.positionX, this.positionY, this.size, 50, 50, 50, 50)
                break;
            default:   
                square(this.positionX, this.positionY, this.size)
                //break;
        }
    }

    move(){
        this.positionY -= 1
    }
        
    incrementCuts(){
        if (this.cuts >= 4)
            this.cuts = 0
        else
            this.cuts += 1;
    }

}


class base {

    constructor(){

    }

}

class player {
    constructor(){

    }
}