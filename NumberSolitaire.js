//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    var end = A.length-1;
    var lastPos = 0;
    //var sumMarks = A[0];
    var nextMarkValue = -Infinity;
    var nextMarkPos = -Infinity;
    var valueTil = new Array(A.length).fill(-Infinity);
    valueTil[0] = A[0];
    while(lastPos != end){
        for(var k=1; k!=7; ++k){
            var maybe = lastPos + k;
            if(A[maybe] + valueTil[lastPos] >= valueTil[maybe]){
                valueTil[maybe] = A[maybe] + valueTil[lastPos];
            }
            if(maybe == end){
                break;
            }
        }
        lastPos++;// = nextMarkPos;
    }
    return valueTil[end];
}
            