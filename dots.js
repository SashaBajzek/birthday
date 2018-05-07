var dots = [];

// TODO: Make dot size a variable

// The Dot object used to scaffold the dots
var Dot = function(x, y, className) {
  this.x = x;
  this.y = y;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = className;

    n.style.left = x + "px";
    n.style.top = y + "px";

    document.body.appendChild(n);
    return n;
  }());
};

for(var i=0; i<gameboard.columns; i++) {
  for(var j=0; j<gameboard.rows; j++){
    var dot = new Dot(i * gameboard.spacing, j * gameboard.spacing, "dot__large");
    dots.push(dot);
  }
}

for(var i=0; i<((gameboard.columns - 1) * gameboard.minorTicks); i++) {
  for(var j=0; j<gameboard.rows; j++){
    // i%10 != 0 ensures small dots aren't under large dots
    if(i % gameboard.minorTicks != 0) {
      var dot = new Dot(i * gameboard.spacing / gameboard.minorTicks + 3, j * gameboard.spacing + 3, "dot__small");
      dots.push(dot);
    }
  }
}

for(var i=0; i<gameboard.columns; i++) {
  for(var j=0; j<((gameboard.rows - 1) * gameboard.minorTicks); j++){
    // j%10 != 0 ensures small dots aren't under large dots
    if(j % gameboard.minorTicks != 0) {
      var dot = new Dot(i * gameboard.spacing + 3, j * gameboard.spacing / gameboard.minorTicks + 3, "dot__small");
      dots.push(dot);
    }
  }
}

Dot.prototype.draw = function() {
  if(Math.abs(pacMan.currentX - this.x) < 10 && Math.abs(pacMan.currentY - this.y) < 10 ) {
    this.node.classList.add("eaten");
  }
};
