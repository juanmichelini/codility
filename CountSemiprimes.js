//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
    
    var primes = new Array(N+1).fill(true);
    var primeFactors = new Array(N+1).fill(0);
    primeFactors[0] = 0;
    primeFactors[1] = 0;
    for(var i = 2; i< primeFactors.length; i++){
        if(primes[i])
            primeFactors[i] += 1;
        for(var j = i*2; j < primeFactors.length; j += i ){
            primes[j] = false;
            primeFactors[j] += primeFactors[i];
        }
        if(i*i< primeFactors.length)
            primeFactors[i*i] += 1;
    }

    var semiprimesToLeft = new Array(N+1).fill(0);
    for(var i = 1; i< semiprimesToLeft.length; i++){
        var cur = primeFactors[i] == 2 ? 1 : 0;
        semiprimesToLeft[i] = semiprimesToLeft[i-1] + cur;
    }
    
    var ret = new Array();
    for(var i = 0; i < P.length; i++){

        ret.push(semiprimesToLeft[Q[i]] - semiprimesToLeft[P[i]-1])   
    }
    return ret;
}

            