//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sorted = A.sort((a,b)=>a-b);
    var start = 0;
    var end = sorted.length - 1;
    var min = +Infinity;
    while(start<=end){
        var sum = sorted[start] + sorted[end];
        var min = Math.min(Math.abs(sum), min)
        if(sum > 0){
            end--;
        }else if(sum<0){
            start++;
        }else{
            return 0;
        }
    }
    return min;
}

            