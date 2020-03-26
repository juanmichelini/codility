//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var profit = 0;
    var len = A.length;
    if (len >= 2){
        var min = A[0];
        for(var i = 1; i<len; i++){
            profit = Math.max(profit, A[i] - min)
            min = Math.min(min, A[i])
        }
    }
    
    return profit;
}
            