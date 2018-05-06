var mouse = {
  x: 0,
  y: 0,
};

function animate() {
  pacMan.targetX = Math.ceil((mouse.x + 1) / 10) * 10;
  pacMan.targetY = Math.ceil((mouse.y + 1) / 10) * 10;
  
  if(pacMan.currentX !== pacMan.targetX || pacMan.currentY !== pacMan.targetY) {
    // Keep Pac-Man moving until it reaches target
    pacMan.draw();
  } else {
    // Once Pac-Man reaches target, set image to mouthOpen so it doesn't look like a plain circle
    pacMan.mouthOpen = true;
  }
  
  dots.forEach(dot => dot.draw());
}

var trackMouse = function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
};

addEventListener("mousemove", trackMouse);
addEventListener("touchstart", trackMouse);
addEventListener("touchmove", trackMouse);

// Prevent scrolling
document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });

// Get it started by calling animate().
var intervalIDAnimate = window.setInterval(animate, 300);