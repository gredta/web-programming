function setup() {
  createCanvas(400, 400);
}

let s = "I think it's really admirable how humans can create such advanced technology and still find a way to create art with it, especially when that wasn't its intended purpose.";
function draw() {
  background(50);
  fill(200);
    push();
    translate(200,200);
    rotate( radians(frameCount) );
    text(s, 0, 0, 150, 200); // Text wraps within text box
	pop();
}