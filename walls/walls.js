var walls = [];

// TODO: Make wall offset of 6px a variable

// The Wall object used to scaffold the walls
var Wall = function(x, y, className) {
  this.x = x;
  this.y = y;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = className;

    n.style.left = x + "px";
    n.style.top = y + "px";

    n.style.height = gameboard.spacing - 2 * gameboard.movementSpace + "px";
    n.style.width = gameboard.spacing - 2 * gameboard.movementSpace + "px";

    document.body.appendChild(n);
    return n;
  }());
};

// Add square walls
for(var i=0; i < (gameboard.columns - 1); i++) {
  for(var j=0; j < (gameboard.rows - 1); j++){
    var wall = new Wall(i * gameboard.spacing + gameboard.movementSpace + 6, j * gameboard.spacing + gameboard.movementSpace + 6, "walls");
    walls.push(wall);
  }
}
