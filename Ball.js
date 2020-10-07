class Ball{
    constructor(x,y,radius){
        var options={
            density: 1.5,
            friction: 1,
            restitution: 0.9
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}