class Paper
{
      constructor(x,y,r)
      {
            var options = 
            {
                isStatic : true,
                restitution:0.3,
                friction : 0.5,
                density : 1.2
            }
            this.x = x;
            this.y = y;
            this.r = r;
            this.body = Bodies.circle(this.x,this.y,this.r/2,options)
            this.image=loadImage("paper.png");
            World.add(world,this.body);
            
      }
      display()
      {
            fill ("white");
            imageMode(CENTER);
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            image(this.image,0,0,this.r);
            pop ();
      }
}