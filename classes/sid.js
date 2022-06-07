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

    dorminhoco(){
        var novoAng = bomba.ang - 28;
        novoAng *= (3.14/180);
        var velocity = p5.Vector.fromAngle(novoAng);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});
    }
}