//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //lowest value for each possible q
    var p = +Infinity;
    var q = +Infinity;
    var gMin = +Infinity;
    
    var curMin = +Infinity;
    var curMinL = 1;
    for(var s = 1; s < A.length; s ++){
        var shortAvg = (A[s-1] + A[s])/2;
        var longAvg = ((curMin*curMinL) + A[s])/(curMinL + 1);
        if(longAvg > shortAvg){
            curMin = shortAvg;
            curMinL = 2;
        }else{
            curMin = longAvg;
            curMinL = curMinL + 1;
        }
        if(curMin < gMin){
            gMin = curMin;
            q = s;
            p = s  - curMinL + 1;
        }

    }
    
    return p;
}
            