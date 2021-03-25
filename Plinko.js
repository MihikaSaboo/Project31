class Plinko {
    
        constructor (x,y,radius) {
          var options= {
              'friction': 0.5,
              'density': 1.2,
              'isStatic':true
          }
          this.radius= 10;
          this.body = Bodies.circle(x,y,10,options);
         
    
           World.add(world, this.body);
        }
        display(){
            var pos =this.body.position;
            push();
            translate(pos.x,pos.y); 
            ellipseMode(RADIUS);
            ellipse(0, 0, 10,10); 
            pop(); 
          }
        }