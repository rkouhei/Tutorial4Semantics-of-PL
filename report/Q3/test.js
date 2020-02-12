// // 最も原始的なバージョン（ストップしない）
// function move(n, a, b) {
//   // document.form.textarea.value += ("move " + n + " from " + a + " to " + b + "\n")
//   console.log("move " + n + " from " + a + " to " + b + "\n");
//   return 0;  // 特に意味はないが、形をそろえるため 0 を return する
// }


// function hanoi(n, a, b, c) {
//   if (n > 0) {
//     hanoi(n - 1, a, c, b);
//     move(n, a, b);
//     hanoi(n - 1, c, b, a);    
//   }
//   return 0;
// }

// function exec() {
//   return hanoi(5, 'a', 'b', 'c');
// }

// exec()

// まずは、CPSに変換
// function moveCPS(n, a, b, k) {
//   document.writeln("move " + n + " from " + a + " to " + b);  
//   return k(0);
// }
// 
// function hanoiCPS(n, a, b, c, k) {
//   if (n > 0) {
//     return hanoiCPS(n - 1, a, c, b,
//             	 function (ignore) {
//             	   return moveCPS(n, a, b, 
//             	 	       function(ignore) {
//             	 	         return hanoiCPS(n - 1, c, b, a, k);
//             	 	       }); 
//             	 }); 
//   } 
//   return k(0);
// }

// moveを呼んだ後で一旦停止するバージョン

function moveCPS(n, a, b, k) {
  document.form.textarea.value += ("move " + n + " from " + a + " to " + b + "\n");  
  return k;     // k(0) ではない。
}


function hanoiCPS(n, a, b, c, k) {
  if (n > 0) {
    return hanoiCPS(n - 1, a, c, b,
            	 function (ignore) {
            	   return moveCPS(n, a, b, 
            	 	       function(ignore) {
            	 	         return hanoiCPS(n - 1, c, b, a, k);
            	 	       }); 
            	 }); 
  }
  return k(0);
}

// 次のように繰返しに書き換えることもできるが...
// function aux(n, a, b, c, k) {
//   return function () {
//            return moveCPS(n, a, b, 
//            	       function() {
//             	         return hanoiCPS(n - 1, c, b, a, k);
//             	       }); 
//          };
// }
// 
// function hanoiCPS(n, a, b, c, k) {
//   while (n > 0) {
//     k = aux(n, a, b, c, k);
//     var tmp = b; b = c; c = tmp; n--;		 
//   }
//   return k();
// }

function doEnd(ignore) { 
  document.form.textarea.value += "end\n";
  return doEnd;
}

var restart = function(ignore) {
  return hanoiCPS(5, 'a', 'b', 'c', doEnd);
};

function exec() {
  restart = restart(0);
}