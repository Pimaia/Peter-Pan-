class EraDoGelo {
    constructor(posX, posY, lar, alt, ang){
        this.posX = posX;
        this.posY = posY;
        this.lar = lar;
        this.alt = alt;
        this.ang = ang;

        this.pedra = loadImage ("./assets/cannonBase.png"); 
        this.canudo = loadImage ("./assets/canon.png");
    }
    jack (){
        if(keyIsDown(RIGHT_ARROW) && this.ang < 70){
            this.ang += 1;
        }
        if(keyIsDown(LEFT_ARROW) && this.ang > -30){
            this.ang -= 1;
        }
        push();
        translate(this.posX, this.posY);
        rotate(this.ang);
        imageMode(CENTER);
        image(this.canudo,0,0, this.lar, this.alt);
        pop();

        image(this.pedra,70, 20, 200, 200);
        noFill();
    }
}