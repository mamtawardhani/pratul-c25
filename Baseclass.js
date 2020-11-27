class Baseclass{
    constructor(x,y,width,height,angle){
      var options={
        restitution: 0.8,
        friction:1,
        density:0.8
      }
  
      this.image=loadImage("sprites/bg.png")
      this.body=Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.body)
    }
  
  
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
 
      imageMode(CENTER)
      image(this.image,0,0,50,50)
      pop()
    }
  }