class Boy{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.boy = loadImage("Boy.png");
        this.body = Bodies.rectangle(x,y,options);
        //this.width = width;
        //his.height = height;
        World.add(world, this.body);
    }
    
    display(){
        image(this.boy, 120, 270, 270, 340);
    }
}