//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var arrayLength = A.length;
    var ret = new Array(arrayLength);
    for (var i = 0; i < arrayLength; i++) {
        ret[(K+i)%arrayLength] = A[i];
    }
    return ret;
}

            