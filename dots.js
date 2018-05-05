var dots = [];

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

var spacing = Math.max(window.innerWidth / 10, window.innerHeight / 10);

for(var i=0; i<10; i++) {
  for(var j=0; j<10; j++){
    var dot = new Dot(i * spacing, j * spacing, "dot__large");
    dots.push(dot);
  }
}

for(var i=0; i<100; i++) {
  for(var j=0; j<10; j++){
    // i%10 != 0 ensures small dots aren't under large dots
    if(i%10 != 0) {
      var dot = new Dot(i * spacing / 10 + 3, j * spacing + 3, "dot__small");
      dots.push(dot);
    }
  }
}

for(var i=0; i<10; i++) {
  for(var j=0; j<100; j++){
    // j%10 != 0 ensures small dots aren't under large dots
    if(j%10 != 0) {
      var dot = new Dot(i * spacing + 3, j * spacing / 10 + 3, "dot__small");
      dots.push(dot);
    }
  }
}

Dot.prototype.draw = function() {
  if(Math.abs(mouse.newX - this.x) < 10 && Math.abs(mouse.newY - this.y) < 10 ) {
    this.node.style.backgroundColor = "black";
  }
};