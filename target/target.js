var target = {
  x: gameboard.layout.offsetLeft,
  y: gameboard.layout.offsetTop,
  draw: targetDraw,
  node: (function(){
    var n = document.createElement("div");
    n.className = "target";
    document.body.appendChild(n);
    return n;
  }())
};

function targetDraw() {
  target.node.style.left = target.x + 3 + "px";
  target.node.style.top = target.y + 3 + "px";
};