//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var countPairs = 0;
    for(var i = 0; i<A.length; i++){
        var a = A[i];
        var b = B[i];
        if(sharesAllPrimesWith(a,b) && sharesAllPrimesWith(b,a)){
            countPairs++;
        }
    }   
    return countPairs;
}

//greatest common divisor
function gcd(a,b){
    return b == 0 ? a : gcd(b, a%b);
}

function sharesAllPrimesWith(a,b){
    var g = gcd(a,b);
    while(a != 1  && g != 1){
        a = a/g;
        g = gcd(a,b);
    }
    
    if(a == 1)
         return true;
      
    return false;
}
            