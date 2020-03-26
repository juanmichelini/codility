//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, F) {
    // write your code in JavaScript (Node.js 8.9.4)
    var AB = new Array(A.length);
    for(var i = 0; i < A.length; i++){
        AB[i] = [A[i]-B[i],A[i], B[i]];
    }
    AB.sort((a,b) => b[0] - a[0]);
    var total = 0;
    for(var i = 0; i < A.length; i++){
        total += i < F ? AB[i][1] : AB[i][2];
    }
    return total;
}

            