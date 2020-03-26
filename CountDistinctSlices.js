//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var head = 0;
    var tail = 0;
    var body = new Array(M+1)
    var slices = 0;
    const bound = 1000000000;
    while(head < A.length && tail < A.length){
        if(body[A[head]] != true){
            body[A[head]] = true;
            head++;
            slices += head-tail;
            if(slices >= bound)
                return bound;
        }else{
            body[A[tail]] = false;
            tail++;
        }
    }
    
    return slices;
}
            