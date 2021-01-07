class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 40
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }


attach(body){
    this.sling.bodyA = body;
}

fly(){
    this.sling.bodyA = null;
}  

    display(){
        var bodyA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stokeWeight(10);
        stroke("white");
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        pop();
    }
}