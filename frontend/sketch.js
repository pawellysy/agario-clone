const userColor = `#FF0000`;
const foodColor = `#00FF00`;
let blob;
let myColor;
let foodBlobs = [];
const foodSize = 10;
class GameBlob {
    constructor(x, y, r, color) {
        this.position = createVector(x, y);
        this.r = r;
        this.color = color;
    }
    show() {
        fill(this.color);
        circle(this.position.x, this.position.y, this.r * 2);
    }
}

class UserBlob extends GameBlob {
    constructor(x, y, r, color) {
        super(x, y, r, color);
    }

    update() {
        let velocity = createVector (mouseX -width/2 , mouseY - height/2);
        velocity.setMag(100 / this.r);
        this.position.add(velocity)
        
    }

    eats(other) { 
        let distance = p5.Vector.dist(this.position, other.position)
        if (distance) {
            this.r += 1;
            // const newArea = this.r * this.r +  r * r;
            // this.r = Math.sqrt(newArea);
            // other.color = '#555555'
            // this.r += other
            return true;
        } else {
            return false;
        }
    }
}

class FoodBlob extends GameBlob {
    constructor (x, y, r, color) {
        super (x,y, r, color)
    }
    wasEaten () {
        this.color = '#FFFFFF'
    }

}

function setup() {
    createCanvas(800, 600);
    myColor = color(255, 100, 100, 233);
    blob = new UserBlob(100, 100, 50, myColor);
    for (let i = 0; i < 10; i++) {
        foodBlobs[i] = new FoodBlob(random(height), random(width), foodSize, foodColor)
    }

}

function draw() {
    translate(width/2 - blob.position.x,height/2 -blob.position.y)
    background(0);
    blob.update();
    blob.show();
    
    for (let ifoodBlobs.length -1; i >= 0; i--) {
        foodBlobs[i].show();
    }
}

