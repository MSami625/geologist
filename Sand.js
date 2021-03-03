class Sand{

    constructor(x,y){

        var options={
            'restitution':1.0,
            'density':1.0,
            'friction':5
        }

        this.body=Bodies.circle(x,y,3,options);
        this.radius=3;

        World.add(world,this.body);

    }

    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(1);
        stroke("white");
        fill("brown");
        ellipse(0,0,this.radius);
        pop();

    }




}