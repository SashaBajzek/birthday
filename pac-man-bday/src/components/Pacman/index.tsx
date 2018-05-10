import * as React from 'react';
import './Pacman.css';

class Pacman extends React.Component<any, any> {
  public state = {
    direction: "left",
    mouthOpen: true
  }
  public render() {
    return (
      <div className={`Pacman Pacman--${this.state.direction} ${this.state.mouthOpen ? 'Pacman--open' : 'Pacman--closed'}`} />
    );
  }
}

export default Pacman;


/*


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
  stalled: false,
  fixingStall: false,
  node: (function(){
    var n = document.createElement("div");
    n.className = "pacman";
    document.body.appendChild(n);
    return n;
  }())
};

function pacManDraw() {
  pacMan.stalled = stalled();

  pacMan.previousX = pacMan.currentX;
  pacMan.previousY = pacMan.currentY;

  setLocation();

  pacMan.node.style.left = pacMan.currentX - 3 + "px";
  pacMan.node.style.top = pacMan.currentY - 3 + "px";

};

function setLocation() {
  // Restrain Pac-Man to only moving one direction at a time
  // Choose the X/Y direction to move first, based on largest distance

  var diffX = pacMan.targetX - pacMan.currentX;
  var diffY = pacMan.targetY - pacMan.currentY;

  var locationType = getLocationType(pacMan.currentX, pacMan.currentY);

  // If stalled, get to nearest junction
  if(pacMan.stalled || pacMan.fixingStall) {
    if (locationType === "row") {
      if (pacMan.currentX % gameboard.spacing === 0) {
        // Made it to junction, stall fixed
        pacMan.stalled = false;
        pacMan.fixingStall = false;
      } else if(pacMan.currentX % gameboard.spacing < gameboard.spacing / 2) {
        pacMan.fixingStall = true;
        moveLeft();

        if(pacMan.currentX % gameboard.spacing === 0) {
          // This was the final step to junction, stall fixed
          pacMan.stalled = false;
          pacMan.fixingStall = false;
        }

      } else {
        pacMan.fixingStall = true;
        moveRight();

        if(pacMan.currentX % gameboard.spacing === 0) {
          // This was the final step to junction, stall fixed
          pacMan.stalled = false;
          pacMan.fixingStall = false;
        }

      }
    } else if (locationType === "column") {
      if (pacMan.currentY % gameboard.spacing === 0) {
        // Made it to junction, stall fixed
        pacMan.stalled = false;
        pacMan.fixingStall = false;
      } else if(pacMan.currentY % gameboard.spacing < gameboard.spacing / 2) {
        pacMan.fixingStall = true;
        moveUp();

        if(pacMan.currentY % gameboard.spacing === 0) {
          // This was the final step to junction, stall fixed
          pacMan.stalled = false;
          pacMan.fixingStall = false;
        }

      } else {
        pacMan.fixingStall = true;
        moveDown();

        if(pacMan.currentY % gameboard.spacing === 0) {
          // This was the final step to junction, stall fixed
          pacMan.stalled = false;
          pacMan.fixingStall = false;
        }

      }
    } else {
      // Made it to junction, stall fixed
      pacMan.stalled = false;
      pacMan.fixingStall = false;
    }
  } else {
    if (locationType === "junction") {
      if(Math.abs(diffX) > Math.abs(diffY)) {
        if(diffX > 0) {
          moveRight();
        } else if(diffX < 0) {
          moveLeft();
        }
      } else {
        if(diffY > 0) {
          moveDown();
        } else if(diffY < 0) {
          moveUp();
        }
      }
    } else if (locationType === "column") {
      if(diffY > 0) {
        moveDown();
      } else if(diffY < 0) {
        moveUp();
      }
    } else if (locationType === "row") {
      if(diffX > 0) {
        moveRight();
      } else if(diffX < 0) {
        moveLeft();
      }
    }
  }
}

function getLocationType(x, y) {
  var locationType = "";

  if (x % gameboard.spacing === 0 && y % gameboard.spacing === 0) {
    locationType = "junction";
  } else if (x % gameboard.spacing === 0) {
    locationType = "column";
  } else if (y % gameboard.spacing === 0) {
    locationType = "row";
  } else {
    locationType = "error";
  }

  return locationType;
}

function stalled() {
  // If returns true, Pac-Man is not at final destination
  // But is stalling in same place
  // And is not just starting
  if (pacMan.previousX === pacMan.currentX && pacMan.previousY === pacMan.currentY && pacMan.currentX !== 0 && pacMan.currentY !== 0 && pacMan.previousX !== 0 && pacMan.previousY !== 0) {
    console.log("stalled");
    return true;
  } else {
    return false;
  }
}

function moveRight() {
  pacMan.direction = "right";
  pacMan.currentX = Math.round((pacMan.currentX + gameboard.movementSpace) * 100) / 100;
}

function moveLeft() {
  pacMan.direction = "left";
  pacMan.currentX = Math.round((pacMan.currentX - gameboard.movementSpace) * 100) / 100;
}

function moveUp() {
  pacMan.direction = "up";
  pacMan.currentY = Math.round((pacMan.currentY - gameboard.movementSpace) * 100) / 100;
}

function moveDown() {
  pacMan.direction = "down";
  pacMan.currentY = Math.round((pacMan.currentY + gameboard.movementSpace) * 100) / 100;
}

*/