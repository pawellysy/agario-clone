const userColor = `#FF0000`;
const foodColor = `#00FF00`;
let blob;
let myColor;
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

        let velocity = createVector (mouseX, mouseY);
        velocity.sub(this.position);
        velocity.setMag(100 / this.r);
        this.position.add(velocity)
        
    }

    hasEaten(r) { 
        const newArea = this.r * this.r +  r * r;
        this.r = Math.sqrt(newArea);
    }
}

class FoodBlob extends GameBlob {
    
}

function setup() {
    createCanvas(400, 400);
    myColor = color(255, 100, 100, 233);
    blob = new UserBlob(100, 100, 50, myColor);
}

function draw() {
    background(0);
    blob.update();
    blob.show();
}


// let velocity = createVector(0, 0);
// const keyPressed = () => {

//     if (keyCode === LEFT_ARROW) {
//         velocity.add(createVector(-1,0));
//     }
//     if (keyCode === RIGHT_ARROW) {
//         velocity.add(createVector(1,0));
//     }
//     if (keyCode === UP_ARROW) {
//         velocity.add(createVector(0,1));
//     }
//     if (keyCode === DOWN_ARROW) {
//         velocity.add(createVector(0,-1));
//     }
// }

// keyPressed()
// this.move(velocity);
// // };