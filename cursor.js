// pacMan is a PacMan object,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var pacMan = undefined,
frame = 0,
mouse = {
  newX: 0,
  newY: 0,
  prevX: 0,
  prevY: 0
};

// The PacMan object used to scaffold the dots
var PacMan = function() {
  this.newX = 0;
  this.newY = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "pacman";
    document.body.appendChild(n);
    return n;
  }());
};

// The PacMan.prototype.draw() method sets the position of 
// the object's <div> node
PacMan.prototype.draw = function() {
  this.node.style.left = this.newX + "px";
  this.node.style.top = this.newY + "px";
  if(frame < 5) {
    this.node.style.background = "center / contain no-repeat url(./images/pacman/Pac-Man.svg)";
  } else {
    this.node.style.background = "center / contain no-repeat url(./images/pacman/Pac-Man__Closed.svg)";
  }
  
  if(this.newX > this.prevX) {
    this.node.style.transform = "rotate(180deg)";
  } else if(this.newX < this.prevX) {
    this.node.style.transform = "rotate(0deg)";
  } else if(this.newY > this.prevY) {
    this.node.style.transform = "rotate(-90deg)";
  } else if(this.newY < this.prevY) {
    this.node.style.transform = "rotate(90deg)";
  }
};

pacMan = new PacMan();

// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.newX,
      y = mouse.newY;
  
  pacMan.frame = frame;
  pacMan.prevX = mouse.prevX;
  pacMan.prevY = mouse.prevY;
  pacMan.newX = x;
  pacMan.newY = y;
  pacMan.draw();

 }

 addEventListener("mousemove", function(event) {
  if(frame > 10) {
    frame = 0;
  } else {
    frame++;
  }

  mouse.prevX = mouse.newX;
  mouse.prevY = mouse.newY;
  mouse.newX = event.pageX;
  mouse.newY = event.pageY;
 });
 
 // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
 function animate() {
  draw();
  requestAnimationFrame(animate);
 }
 
 // And get it started by calling animate().
 animate();