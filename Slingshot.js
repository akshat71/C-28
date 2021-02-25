class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 20
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        //console.log(this.sling)
    }
    fly(){
    this.sling.bodyA=null
    }
    
}