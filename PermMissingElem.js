//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
        A = A.sort((a,b) => a - b);
        var ALength = A.length;
        var num = ALength+1;
        for(var i = 0; i < ALength; i++){
            if(A[i] != i+1){
                num = i+1;
                break;
            }
        }
        return num;
}

            