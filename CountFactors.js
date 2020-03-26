//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var factors = 0;
    var bottom = 0;
    for(var i = Math.floor(Math.sqrt(N)); i > bottom; i--){
        if(N%i == 0){
            factors ++;
            if(i*i != N){
                factors ++;
                bottom = Math.min(bottom,N/i);
            }
        }
    }
    return factors;
}

            