//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    //0 ≤ P < Q < R < N
    //A[P] + A[Q] > A[R],
    //A[Q] + A[R] > A[P],
    //A[R] + A[P] > A[Q].
    A = A.sort((a,b) => a -b);
    var p = 0;
    var q = 0;
    var r = 0;
    var count = 0;
    for(var i = 2; i < A.length; i++){
        p = A[i-2];
        q = A[i-1];
        r = A[i];
        if(p + q > r && p + r > q && q + r > p ){
            count ++;
            break;  
        }
    }
    return count;

}

            