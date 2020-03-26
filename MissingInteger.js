//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort((a,b)=> a - b);
    var Alength = A.length;
    var ret = 1;
    for(var i = 0; i < Alength ; i++){
        var cur = A[i];
        if(cur > 0){
               if(ret < cur){
                   break;
               }else if(ret == cur){
                   ret++;
               }
        }
    }
    return ret;
}

            