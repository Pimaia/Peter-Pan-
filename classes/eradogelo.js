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
        push()
        imageMode (CENTER);
        image(this.canudo,this.posX, this.posY, this.lar, this.alt);
        pop()

        image(this.pedra,70, 20, 200, 200);
        noFill();
    }
}