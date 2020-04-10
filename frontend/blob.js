class Blob {
    constructor () {
        this.position = createVector(width/2, height/2);
        this.r = 64; 
    }
    show () {
        fill(255);
        circle(this.position.x, this.position.y, this.r*2)
    }
}