//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort((a,b) => a - b);
    var arrayLength = A.length;
    var cur = A[0];
    var curlength = 1;
    for(var i = 1; i < arrayLength; i ++ ){
        if(cur == A[i]){
            curlength += 1;
        }else{
            if(curlength % 2 == 1){
                break;
            }else{
                cur = A[i];
                curlength = 1;
            }
        }
    }
    return cur;
}

            