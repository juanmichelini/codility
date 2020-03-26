//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var topLimit = 10000000;
    var ret = 0;
    var sides = new Array(A.length);
    
    for(var i=0; i < A.length; i++){    
        sides[i] = [i-A[i], i+A[i]];
    }

    sides.sort((a,b) => a[0] - b[0]);

    for(var i=0; i < A.length; i++){
        var cur = sides[i]
        for(var j=i+1; j < A.length; j++){
            var comp = sides[j];
            if(comp[0] <= cur[1]){
                ret++;  
                if(ret > topLimit){
                    ret = -1;
                }
            } else {
                break;
            }

        }
    }
    
    
    return ret;
}

            