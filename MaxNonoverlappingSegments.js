//Score: 100%
              "use strict"
function solution(A, B) {
    var count = 0;
    var prevB = -Infinity;
    for(var i = 0, len = A.length; i != len; ++i){
        if(A[i]>prevB){
            prevB = B[i];
            ++count;
        }
    }
    return count;
}
            