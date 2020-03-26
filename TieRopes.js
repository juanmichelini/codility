//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var curLength = 0;
    var countOverK = 0;
    for(var i = 0; i<A.length; i++){
        curLength +=  A[i];
        if(curLength >= K){
            curLength = 0;
            countOverK++;
        }
    }
    return countOverK;
}

            