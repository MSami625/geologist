class Stone{
    constructor(x,y,height,width){
    var options={
        'restitution':1.0,
        'density':1.5,
        'friction':3
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
fill("silver");
rect(0,0,this.width,this.height);
pop();

  }

}