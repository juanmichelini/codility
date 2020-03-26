//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var m = N;
    var max = 0;
    var current = 0;
    while(m != 0 && m % 2 == 0){
        m = m >> 1;
    }
    while(m != 0){
        if(m % 2 == 0){
            current += 1;
        }else{
            if(current > max){
                max = current;
            }
            current = 0;
        }
        m = m >> 1;
    }
    return max;
}

            