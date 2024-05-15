
function setup() {
    createCanvas(windowWidth, windowHeight);
    levelOne = new levelDesign(generateEnemies(), new base(), new player())


    userJack = new jack();

}
  
function draw() {
    // level one
    levelOne.loadItems()
    levelOne.handlemove()

    ellipse(200, windowHeight / 2 + 50, 200);

    userJack.Square()


    
}












function mousePressed() {    // if mouse presses square, cut.
    for (let i = 0; i < levelOne.squares.length; i++)
    {
    if (dist(mouseX, mouseY, levelOne.getSquareX(i), levelOne.getSquareY(i)) <= 100) {
        levelOne.squares[i].incrementCuts()
        }
    }
}

class levelDesign {
    //TO-DO: constructor
    //states: level color,
    //
    constructor(squares, base, player){
        this.squares = squares
        this.player = player
        this.base = base
    }

    getSquareX(index){
        return this.squares[index].getPositionX()
    }
    
    getSquareY(index){
        return this.squares[index].getPositionY()
    }


    loadItems(){
        this.loadColor()
        this.loadPlayer()
       // this.loadGUI()
        
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

        this.squares.forEach(square => {
            square.spawn()
            square.move()
        })

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

    getPositionX(){
        return this.positionX
    }

    getPositionY(){
        return this.positionY
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
        this.positionX -= 1
    }
        
    incrementCuts(){
        if (this.cuts >= 4)
            this.cuts = 0
        else
            this.cuts += 1;
    }

}

class enemyCircle{

}

class enemyTriangle{

}


class base {

    constructor(){

    }

}

class player {
    constructor(){

    }
}


function generateEnemies () {
    list = []
    let spacing = 250
    let enemyAmount = 16

    function fillList () {
        for (let i = 0; i < enemyAmount; i++)
        {

            list[list.length] =  new enemySquare(2000 + spacing, windowHeight / 2, Math.floor(Math.random() * (200-60) + 60))
            spacing += 250
        }
    }
    fillList()
    return list
}








class jack {
    constructor(){
    }

    Square(){
        square(400, 300, 200, 50)
    }
}