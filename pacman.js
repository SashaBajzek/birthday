// pacMan is a PacMan object,
// mouse is an object used to track the X and Y position
// of the mouse, set with a mousemove event listener below
var pacMan = undefined,
frame = 0;

// The PacMan object used to scaffold the dots
var PacMan = function() {
  this.targetX = 0;
  this.targetY = 0;
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
  this.prevX = this.newX;
  this.prevY = this.newY;

  setLocation();

  this.node.style.left = this.newX - 7 + "px";
  this.node.style.top = this.newY - 7 + "px";


  
  if(frame === 0) {
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

function setLocation() {
  if(pacMan.targetX - pacMan.newX > 0) {
    pacMan.newX += 10;
  } else if(pacMan.targetX - pacMan.newX < 0) {
    pacMan.newX -= 10;
  }

  if(pacMan.targetY - pacMan.newY > 0) {
    pacMan.newY += 10;
  } else if(pacMan.targetY - pacMan.newY < 0) {
    pacMan.newY -= 10;
  }
}


pacMan = new PacMan();
