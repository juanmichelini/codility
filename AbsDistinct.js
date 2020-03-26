//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var dict = new Object();
    var ret = 0;
    for(var i=0; i < A.length; i++){
        var abs = Math.abs(A[i]);
        if(dict[abs] == undefined){
            dict[abs] = true;
            ret++;
        }
    }
    return ret;
}

            