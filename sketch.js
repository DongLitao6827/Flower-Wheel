function setup() {
  createCanvas(800,600);
  angleMode(DEGREES);
  frameRate(24);
  background(0)
}


function draw() {
  translate(width/2,height/2);
  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/2000))
  line(10,10,(110+100*cos(frameCount*2)),(110+100*sin(frameCount*2)));

  line(-10,-10,(100*cos(frameCount*2)-110),(100*sin(frameCount*2)-110));
  
  stroke(lerpColor(color('#0fefca'), color('#ea0043'), frameCount/2000))
  line(10,-10,(110+100*cos(frameCount*2)),(-110+100*sin(frameCount*2)));
  line(-10,10,(-110+100*cos(frameCount*2)),(110+100*sin(frameCount*2)));
   
 



}

