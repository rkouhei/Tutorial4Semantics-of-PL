var ctx;
var x = 256, y = 256;
var dx = 8, dy = 0;
var h = 0;

// function forward() {
  // ctx.strokeStyle = "hsla(" + h +", 100%, 50%, 0.8)";
  // h++; 
  // ctx.beginPath();
  // ctx.moveTo(x, y);
  // ctx.lineTo(x += dx, y += dy); 
  // ctx.closePath();
  // ctx.stroke();
// }

function forwardCPS(k) {
  ctx.strokeStyle = "hsla(" + h +", 100%, 50%, 0.8)";
  h++; 
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x += dx, y += dy); 
  ctx.closePath();
  ctx.stroke();
  return k;
}

function turnLeft() {
  var tmp = dx; dx = dy; dy = -tmp;
}

function turnRight() {
  var tmp = dx; dx = -dy; dy = tmp;
}

// function sierpinski(n) {
//   zig(n);
//   zig(n);
// }

function sierpinskiCPS(n, k) {
  return zigCPS(n, function(ignore) {
    return zigCPS(n, k);
  });
}

// function zig(n) {
//   if (n <= 1) {
//     turnLeft();
//     forward();
//     turnLeft();
//     forward();
//   } else {
//     zig(n / 2);
//     zag(n / 2);
//     zig(n / 2);
//     zag(n / 2);
//   } 
// }

function zigCPS(n, k) {
  if (n <= 1) {
    turnLeft();
    return forwardCPS(function(ignore) {
      turnLeft();
      return forwardCPS(k);
    });
  } else {
    return zigCPS(n/2, function(ignore) {
      return zagCPS(n/2, function(ignore) {
        return zigCPS(n/2, function(ignore) {
          return zagCPS(n/2, k);
        });
      });
    });
  }
}

// function zag(n) {
//   if (n <= 1) {
//     turnRight();
//     forward();
//     turnRight();
//     forward();
//     turnLeft();
//     forward();
//   } else {
//     zag(n / 2);
//     zag(n / 2);
//     zig(n / 2);
//     zag(n / 2);
//   } 
// }

function zagCPS(n, k) {
  if (n <= 1) {
    turnRight();
    return forwardCPS(function(ignore) {
      turnRight();
      return forwardCPS(function(ignore) {
        turnLeft();
        return forwardCPS(k);
      });
    });
  } else {
    return zagCPS(n/2, function(ignore) {
      return zagCPS(n/2, function(ignore) {
        return zigCPS(n/2, function(ignore) {
          return zagCPS(n/2, k);
        });
      });
    });
  }
}

function doEnd(ignore) {
  return doEnd;
}

restart = function(ignore) {
  return sierpinskiCPS(16, doEnd);
};

function exec() {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  restart = restart(0);
}
