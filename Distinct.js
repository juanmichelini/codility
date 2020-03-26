//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length == 0)
        return 0;
    A = A.sort((a,b) => a - b);
    var cantDistinct = 1;
    for(var i = 1; i < A.length; i ++){
        if(A[i]!= A[i-1]){
            cantDistinct++;
        }
    }
    return cantDistinct;
}

            