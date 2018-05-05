var dots = [];

// The Dot object used to scaffold the dots
var Dot = function(x, y) {
  this.x = x;
  this.y = y;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "dot";

    n.style.left = x + "px";
    n.style.top = y + "px";

    document.body.appendChild(n);
    return n;
  }());
};

var spacing = Math.max(window.innerWidth / 10, window.innerHeight / 10);

for(var i=0; i<10; i++) {
  for(var j=0; j<10; j++){
    var dot = new Dot(i * spacing, j * spacing);
    dots.push(dot);
  }
}

Dot.prototype.draw = function() {
  if(Math.abs(mouse.newX - this.x) < 10 && Math.abs(mouse.newY - this.y) < 10 ) {
    this.node.style.backgroundColor = "black";
  }
};