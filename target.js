var target = {
  x: 0,
  y: 0,
  draw: targetDraw,
  node: (function(){
    var n = document.createElement("div");
    n.className = "target";
    document.body.appendChild(n);
    return n;
  }())
};

function targetDraw() {
  target.node.style.left = target.x - 7 + "px";
  target.node.style.top = target.y - 7 + "px";
};