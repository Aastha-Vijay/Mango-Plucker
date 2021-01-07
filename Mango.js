class Mango{
    constructor(x,y,radius){
        var options={
        isStatic:true,
        restitution:0,
        friction:1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.diameter = radius*2;
        this.mango = loadImage("Mango2.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.mango, 0, 0, this.diameter, this.diameter);
        pop();
    }
}