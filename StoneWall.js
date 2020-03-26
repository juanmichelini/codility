//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    var stack = new Array();
    var cubes = 0;
    var lastHeight = 0;
    for(var i=0; i<H.length; i++){
        while(lastHeight > H[i] && stack.length >= 1){
            var pop = stack.pop();
            lastHeight -= pop;
        }
        if(lastHeight < H[i]){
            stack.push(H[i]-lastHeight);
            lastHeight = H[i];
            cubes++;
        }
    }
    return cubes;
}

            