class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 200,
            stiffness: 0.9
        }
        this.constraint = Matter.Constraint.create(options);
        World.add(world,this.constraint);
    }

    display(){
        var bodyA = this.constraint.bodyA.position;
        var pointB = this.constraint.pointB;
        push();
        strokeWeight(4);
        line(bodyA.x,bodyA.y,pointB.x,pointB.y);
        pop();
    }
}