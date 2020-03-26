//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var totalSum = 0;
    var ALength = A.length;
    for(var i = 0; i<ALength; i++){
        totalSum += A[i]
    }
    var partialSum = 0;
    var minimalDifference = +Infinity;
    for(var p = ALength - 1; p>0; p--){
        partialSum += A[p]
        var currentDif = Math.abs(totalSum - 2*partialSum);
        if(currentDif<minimalDifference){
            minimalDifference = currentDif;
        }
    }
    return minimalDifference;
}

            