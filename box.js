class Box{
    constructor(x,y,w,h){
    var bounce = {
        restitution:0.4
    }
    this.body = Bodies.rectangle(x,y,w,h,bounce)
    World.add(world,this.body);
    this.w = w;
    this.h = h;
    

    }
    display(color){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(color);
      rect(0,0,this.w,this.h);
      pop()
    }
}