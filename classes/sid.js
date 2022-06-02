class Sid {
    constructor(posX, posY) {
        this.thor= 30;
        var Config = {
            isStatic: true
        }
        this.body= Bodies.circle (posX, posY, this.thor, Config);
        World.add (world, this.body);
        this.lerdo = loadImage ("./assets/cannonball.png");
    }
    preguica () {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image (this.lerdo, pos.x, pos.y, this.thor, this.thor);
        pop();
    }
}