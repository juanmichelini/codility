//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var ones = 0;
    var topLimit = 1000000000;
    for(var i = 0; i < A.length; i++){
        ones += A[i];
    }
    var ret = 0;
    for(var i = 0; i < A.length; i++){
        if(A[i] == 1){
            ones -= 1;
        } else {
            //assert(A[i] == 0)
            ret += ones;   
            if(ret > topLimit){
                ret = -1;
                break;
            }
        }
    }
    return ret;
}

            