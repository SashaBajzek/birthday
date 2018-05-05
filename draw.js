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