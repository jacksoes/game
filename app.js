let position = {
    first: 1300,
    second: 1500, 
    third: 1200, 
    fourth: 1400, 
    fifth: 1600 
}

let enemySpawnY = 1300;

let mouseXControl;
let mouseYControl;

let cuts1 = 0;

function setup() {
    createCanvas(800, 1200);
  }
  
function draw() {
    background('rgb(119,255,119)');
    loadUser()
    loadGUI()
    
    // spawn enemy object and make move.
    const square = new enemySquare(interface_enemy.size)
    square.spawn(position.first, cuts1);
    position.first -= 1
        if (position.first < -50){
            position.first = enemySpawnY ;
        }

    
    const square2 = new enemySquare(interface_enemy.size)
    square2.spawn(position.second, 0)
    position.second -= 1
        if (position.second < -50){
            position.second = enemySpawnY ;
        }


     
        

}

function mousePressed() {
    // if mouse presses first square
    if (dist(mouseX, mouseY, 400, position.first + 60) <= 75){
        if (cuts1 == 4)
            cuts1 = 0;
        else
            cuts1 += 1;
    }
    // make user an object
    // if user coordiates = square => do action
   
  }

function loadUser(){
    strokeWeight(10)
    point(mouseX, mouseY)
 
    

}

function loadGUI() {
    //buttons
    strokeWeight(1)
    square(20, 20, 50)
    square(100, 20, 50)
    square(180, 20, 50)
    square(260, 20, 50)
    fill(0, 0); // lets squares be overlapped by cursor.
}



const interface_enemy = {
    size_small: 50,
    size: 100,
    size_large: 150,
} 

class enemySquare {
    constructor(size)
    {
        this.size = size;
        this.position = 800;   
    }
    spawn(position, cuts){
        switch (cuts){
            case 1:
                square(400, position, this.size, 50, 0, 0, 0)
                break;
            case 2:
                square(400, position, this.size, 50, 50, 0, 0)
                break;
            case 3:
                square(400, position, this.size, 50, 50, 50, 0)
                break;
            case 4:
                square(400, position, this.size, 50, 50, 50, 50)
                break;
            default:    
                square(400, position, this.size)
                break;
        }
        
    }

}
    