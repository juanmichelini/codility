//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var counters = new Array(N).fill(0);
    var max = 0;
    var floor = 0;
    var maxSum = 0;
    var Alength = A.length;
    for(var i = 0; i < Alength; i++){
        var cur = A[i];
        if(cur == N + 1){
            floor = max;
        }else{
            if(counters[cur - 1] < floor){
                counters[cur - 1] = floor;
            }
            counters[cur - 1] = counters[cur - 1] + 1; 
            if(counters[cur - 1] > max){
                max = counters[cur - 1];
            }
        }
    }
    for(var j=0; j < N; j++){
        if(counters[j] < floor)
            counters[j] = floor; 
    }        
    return counters;
}
            