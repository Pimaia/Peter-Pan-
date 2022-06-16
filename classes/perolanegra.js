class PerolaNegra {
    constructor(posX, posY, lar, alt, posN){
        this.body = Bodies.rectangle(posX, posY, lar, alt);
        World.add(world,this.body);
        this.lar = lar;
        this.alt = alt;
        this.posN = posN;
        this.ostra = loadImage("./assets/boat.png");
    }

    luneta(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.ostra, 0, this.posN, this.lar, this.alt);
        pop();
    }
}