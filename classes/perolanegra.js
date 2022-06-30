class PerolaNegra {
    constructor(posX, posY, lar, alt, posN, anim){
        this.body = Bodies.rectangle(posX, posY, lar, alt);
        World.add(world,this.body);
        this.lar = lar;
        this.alt = alt;
        this.posN = posN;
        this.ostra = loadImage("./assets/boat.png");
        this.anim = anim;
        this.vel = 0.05;
        this.afun = false;
    }

    pixer(){
        this.vel += 0.05;
    }

    luneta(){
        var pos = this.body.position;
        var angle = this.body.angle;
        var index = floor(this.vel % this.anim.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.anim[index], 0, this.posN, this.lar, this.alt);
        pop();
    }

    bomba (index){
        this.anim = titanic;
        this.vel = 0.05;
        this.lar = 300;
        this.alt = 300;
        this.afun = true;
        setTimeout (()=>{
            Matter.World.remove (world, cruzeiro[index].body);
            delete cruzeiro[index];
        }, 2000)
    }
}

  