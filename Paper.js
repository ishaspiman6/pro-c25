class Paper {
    constructor(x, y){
        var options = {
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
    
        fill("RED");
        image(this.image, pos.x, pos.y, 40,40);
    }
}