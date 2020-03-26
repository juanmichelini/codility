//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var ret = 1;
    A = A.sort((a,b) => a - b);
    var ALength = A.length;
    for(var i = 0; i < ALength; i++){
        if(A[i]!=i+1){
            ret = 0;
            break;
        }   
    }
    return ret;
}

            