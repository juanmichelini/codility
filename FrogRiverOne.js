//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var ret = -1;
    var path =  new Array(X);
    var maxSeconds = 0;
    var cantLeaves = 0;
    var ALength = A.length;
    for(; maxSeconds < A.length; maxSeconds++){
        var curPos = A[maxSeconds];
        if(curPos <= X && path[curPos-1] != 1){
            path[curPos-1] = 1;
            cantLeaves += 1;
            if(cantLeaves == X){
                break;
            }
        }
    }
    if(cantLeaves == X){
        ret =  maxSeconds;
    }
    return ret;
}

            