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

  dots.forEach(dot => dot.draw());

}

var pacManMoving = function(event) {
  if(frame > 10) {
    frame = 0;
  } else {
    frame++;
  }

  mouse.prevX = mouse.newX;
  mouse.prevY = mouse.newY;
  mouse.newX = event.pageX;
  mouse.newY = event.pageY;
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
  requestAnimationFrame(animate);
}

// And get it started by calling animate().
animate();