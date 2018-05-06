// This is the screen redraw function
function draw() {
  // Make sure the mouse position is set everytime
    // draw() is called.
  var x = mouse.newX,
      y = mouse.newY;

  setPacManImageFrame();
  
  pacMan.frame = frame;
  // pacMan.prevX = mouse.prevX;
  // pacMan.prevY = mouse.prevY;
  // pacMan.newX = x;
  // pacMan.newY = y;
  pacMan.targetX = x;
  pacMan.targetY = y;
  
  if(pacMan.newX !== pacMan.targetX && pacMan.newY !== pacMan.targetY) {
    pacMan.draw();
  }
  
  dots.forEach(dot => dot.draw());
}

var pacManMoving = function(event) {
  mouse.prevX = mouse.newX;
  mouse.prevY = mouse.newY;
  mouse.newX = event.pageX;
  mouse.newY = event.pageY;
};

var setPacManTargetLocation = function(event) {
  var targetLocation = {
    x: event.pageX,
    y: event.pageY
  };
  return targetLocation;
};

var setPacManImageFrame = function() {
  if(frame === 1) {
    frame = 0;
  } else {
    frame = 1;
  }
};

addEventListener("mousemove", pacManMoving);
addEventListener("touchstart", pacManMoving);
addEventListener("touchmove", pacManMoving);

// Prevent scrolling
document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });

// animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
function animate() {
  draw();
  //requestAnimationFrame(animate);
}

// And get it started by calling animate().
var intervalIDAnimate = window.setInterval(animate, 500);