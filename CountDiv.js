//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    var fA = A + ((K - (A%K))%K);
    var fB = B - (B%K);
    return (fB - fA)/K  + 1;
}

            