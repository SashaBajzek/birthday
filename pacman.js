var pacMan = {
  targetX: 0,
  targetY: 0,
  currentX: 0,
  currentY: 0,
  previousX: 0,
  previousY: 0,
  direction: "right",
  mouthOpen: true,
  draw: pacManDraw,
  node: (function(){
    var n = document.createElement("div");
    n.className = "pacman";
    document.body.appendChild(n);
    return n;
  }())
};

function pacManDraw() {
  pacMan.prevX = pacMan.currentX;
  pacMan.prevY = pacMan.currentY;

  setLocation();

  pacMan.node.style.left = pacMan.currentX - 7 + "px";
  pacMan.node.style.top = pacMan.currentY - 7 + "px";

  
  if(pacMan.mouthOpen) {
    pacMan.mouthOpen = false;
    pacMan.node.style.background = "center / contain no-repeat url(./images/pacman/Pac-Man.svg)";
  } else {
    pacMan.mouthOpen = true;
    pacMan.node.style.background = "center / contain no-repeat url(./images/pacman/Pac-Man__Closed.svg)";
  }
  
  if(pacMan.direction === "right") {
    pacMan.node.style.transform = "rotate(180deg)";
  } else if(pacMan.direction === "left") {
    pacMan.node.style.transform = "rotate(0deg)";
  } else if(pacMan.direction === "down") {
    pacMan.node.style.transform = "rotate(-90deg)";
  } else if(pacMan.direction === "up") {
    pacMan.node.style.transform = "rotate(90deg)";
  }
};

function setLocation() {
  // Restrain Pac-Man to only moving one direction at a time
  // Choose the X/Y direction to move first, based on largest distance

  var diffX = pacMan.targetX - pacMan.currentX;
  var diffY = pacMan.targetY - pacMan.currentY;

  if(Math.abs(diffX) > Math.abs(diffY)) {
    if(diffX > 0) {
      pacMan.direction = "right";
      pacMan.currentX += 10;
    } else if(diffX < 0) {
      pacMan.direction = "left";
      pacMan.currentX -= 10;
    }
  } else {
    if(diffY > 0) {
      pacMan.direction = "down";
      pacMan.currentY += 10;
    } else if(diffY < 0) {
      pacMan.direction = "up";
      pacMan.currentY -= 10;
    }
  }
}