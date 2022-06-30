class Sid {
    constructor(posX, posY) {
        this.thor= 30;
        var Config = {
            isStatic: true
        }
        this.body= Bodies.circle (posX, posY, this.thor, Config);
        World.add (world, this.body);
        this.pegadas = [];
        this.lerdo = loadImage ("./assets/cannonball.png");
        this.vel = 0.05;
        this.anim = [this.lerdo];
        this.afun = false;
    }

    pixer(){
        this.vel += 0.05;
    }

    preguica () {
        var pos = this.body.position;
        var angle = this.body.angle;
        var index = floor(this.vel % this.anim.length);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image (this.anim[index], 0, 0, this.thor, this.thor);
        pop();

        if(this.body.velocity.x > 0 && pos.x > 10 && !this.afun){
            var position = [pos.x, pos.y];
            this.pegadas.push(position);
        }

        for(var i = 0; i < this.pegadas.length; i++){
            image(this.lerdo, this.pegadas[i][0], this.pegadas[i][1], 5, 5)
        }
    }

    dorminhoco(){
        var novoAng = bomba.ang - 28;
        novoAng *= (3.14/180);
        var velocity = p5.Vector.fromAngle(novoAng);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x: velocity.x * (180/3.14), y: velocity.y * (180/3.14)});
    }

    bomba (index){
        this.afun = true;
        this.anim = ocean;
        this.vel = 0.05
        this.thor = 150;
        Matter.Body.setVelocity(this.body, {x: 0, y: 0});
        setTimeout (()=>{
            Matter.World.remove (world, this.body);
            delete nerf[index];
        }, 1000)
    }
}
