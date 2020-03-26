//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var divisors = new Array((A.length * 2) + 2);;
    for(var i = 1; i< divisors.length; i++){
        divisors[i] = new Array();
    }
    for(var i = 1; i< divisors.length; i++){
        for(var j = i; j < divisors.length; j += i ){
            divisors[j].push(i);
        }
    }

    var occurrences = new Array((A.length * 2) + 2).fill(0);
    for(var i = 0; i< A.length; i++){   
        occurrences[A[i]] += 1;   
    }
    
    var ret = new Array();
    for(var i = 0; i < A.length; i++){   
        var curRet = A.length;
        for(var j = 0; j < divisors[A[i]].length; j++){
            curRet -=  occurrences[divisors[A[i]][j]]; 
        }
        ret.push(curRet);
    }
    
    return ret;
}

            