class Iron{

    constructor(x,y,width,height){

        var options={
            'restitution':0.6,
            'density':3,
            'friction':1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
    
        World.add(world,this.body);

    }

    display(){
    var pos = this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("brown");
    fill("iron");
    rect(0,0,this.width,this.height);
    pop();

    }
}