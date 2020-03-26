//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var orderedA = new Array(101).fill(0);
    for(var i = 0; i < A.length; i++){
        orderedA[Math.abs(A[i])] ++;
    }

    var values = new Set();
    values.add(0);
    var newvalue = 0;
    for(var i = 100; i > -1; i--){
        while(orderedA[i]){
            var tempValues = new Set();
            for(let j of values){
                newvalue = j+i;
                if(newvalue<=1000){
                    tempValues.add(newvalue);
                }
                newvalue = Math.abs(j-i);
                if(newvalue<=1000){
                    tempValues.add(newvalue);
                }
            }
            orderedA[i] --;
            values = tempValues;
        }
    }
    

    var min = +Infinity;
    for(let j of values){
           min = Math.min(min, Math.abs(j));
    }
    return min;
}
            