//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var maxToTheLeft = new Array(A.length);
    maxToTheLeft[0] = 0;
    
    for(var i = 1; i < A.length; i++){
        maxToTheLeft[i] = Math.max(maxToTheLeft[i-1]+A[i], A[i]);
    }
    
    var maxToTheRight = new Array(A.length);
    maxToTheRight[A.length - 1] = 0;
    for(var i = A.length -2; i >= 0; i--){
        maxToTheRight[i] = Math.max(maxToTheRight[i+1]+A[i], A[i]);
    }
    
    
    var max = -Infinity;
    for(var i = 1; i < A.length-1; i++){
        max = Math.max(max, Math.max(maxToTheLeft[i-1],0) + Math.max(maxToTheRight[i+1],0));
    }
    return max;
}
            