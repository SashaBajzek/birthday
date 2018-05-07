var mouse = {
  x: 0,
  y: 0,
};

function animate() {
  if(pacMan.currentX !== pacMan.targetX || pacMan.currentY !== pacMan.targetY) {
    // Keep Pac-Man moving until it reaches target
    pacMan.draw();
  } else {
    // Once Pac-Man reaches target, set image to mouthOpen so it doesn't look like a plain circle
    pacMan.mouthOpen = true;
  }

  dots.forEach(dot => dot.draw());
}

function setTarget() {
  //TODO:  move pacMan.targetX/Y logic to the target object

  // Make sure target is on a path
  var horizDistToNearestColumn = 0;
  var verticalDistToNearestRow = 0;
  if(mouse.x % gameboard.spacing < gameboard.spacing / 2) {
    horizDistToNearestColumn = mouse.x % gameboard.spacing;
  } else {
    horizDistToNearestColumn = gameboard.spacing - mouse.x % gameboard.spacing;
  }

  if(mouse.y % gameboard.spacing > gameboard.spacing / 2) {
    verticalDistToNearestRow = gameboard.spacing - mouse.y % gameboard.spacing;
  } else {
    verticalDistToNearestRow = mouse.y % gameboard.spacing;
  }

  if(horizDistToNearestColumn < verticalDistToNearestRow) {
    // Snap to nearest column
    if(mouse.x % gameboard.spacing < gameboard.spacing / 2) {
      pacMan.targetX = mouse.x - mouse.x % gameboard.spacing;
    } else {
      pacMan.targetX = mouse.x + (gameboard.spacing - mouse.x % gameboard.spacing);
    }

    pacMan.targetY = Math.ceil((mouse.y + 1) / (gameboard.movementSpace)) * (gameboard.movementSpace);
  } else {
    // Span to nearest row
    pacMan.targetX = Math.ceil((mouse.x + 1) / (gameboard.movementSpace)) * (gameboard.movementSpace);

    if(mouse.y % gameboard.spacing > gameboard.spacing / 2) {
      pacMan.targetY = mouse.y + (gameboard.spacing - mouse.y % gameboard.spacing);
    } else {
      pacMan.targetY = mouse.y - mouse.y % gameboard.spacing;
    }
  }

  // Make sure target can't leave board
  pacMan.targetX = Math.min(pacMan.targetX, gameboard.width);
  pacMan.targetY = Math.min(pacMan.targetY, gameboard.height);
}


function tracking() {
  // Update the visual indicator of the target location
  setTarget();
  target.x = pacMan.targetX;
  target.y = pacMan.targetY;
  target.draw();
}

var trackMouse = function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;

  // If target changes, cancel stall fix
  pacMan.stalled = false;
  pacMan.fixingStall = false;
};

addEventListener("mousemove", trackMouse);
addEventListener("touchstart", trackMouse);
addEventListener("touchmove", trackMouse);

//TODO:  on screen resize, refresh board

// Prevent scrolling
document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });

// Get it started by calling animate().
var intervalIDAnimate = window.setInterval(animate, 300);

var intervalIDTracking = window.setInterval(tracking, 0.1);