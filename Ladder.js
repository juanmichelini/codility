//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var l = new Array(A.length);
    for(var i = 0; i<A.length; i++){
        l[i] = calculateResult(A[i], B[i]);
    }
    return l;
}

var allResults = new Array(31);
var allResultsi = new Array(31).fill(-1);
allResults[0] = [0,0];
allResults[1] = [1,0];
var i = 2;
function calculateResult(n, b){
    if(allResultsi[b] == -1){
        allResults[b] = new Array(50002);
        allResults[b][0] = [0,0];
        allResults[b][1] = [1,0];
        allResultsi[b] = 2;
        
    }
    var mod = Math.pow(2,b);

    if(allResults[b][n] == undefined){
        var _one = 0;
        var _two = 0;
        for(var i = allResultsi[b];i<=n; i++){
            _one = allResults[b][i-1][0];
            _two = allResults[b][i-1][1];//includes the ladder with just 1 rung
            allResults[b][i] = [(_one + _two) % mod, _one]
            allResultsi[b]++;
        }
    }

    return (allResults[b][n][0] + allResults[b][n][1])%mod;
}
            