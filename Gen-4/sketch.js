function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  stroke(0,255,255)
  c = random(25)
  strokeWeight(4)
  noFill()
  k=random()/random()
}

function draw() {
      translate(width/2,height/2)
beginShape()
  for(i=0;i<TWO_PI*15;i+=0.01){
    r = 200*cos(k*i)
    x = r*cos(i)
    y = r*sin(i)
    vertex(x,y)
  }
  endShape()
  
}