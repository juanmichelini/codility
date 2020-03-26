//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    var leftDistanceToA = new Array(S.length).fill(+Infinity);
    var leftDistanceToC = new Array(S.length).fill(+Infinity);
    var leftDistanceToG = new Array(S.length).fill(+Infinity);
    var leftDistanceToT = new Array(S.length).fill(+Infinity);
    
    for (var s = 0; s < S.length; s++){
        if(s!=0){
            leftDistanceToA[s] = leftDistanceToA[s-1]+1;
            leftDistanceToC[s] = leftDistanceToC[s-1]+1;
            leftDistanceToG[s] = leftDistanceToG[s-1]+1;
            leftDistanceToT[s] = leftDistanceToT[s-1]+1;
        }
        var c = S[s];
        if(c+""=="A")
            leftDistanceToA[s] = 0;
        if(c+""=="C")
            leftDistanceToC[s] = 0;
        if(c+""=="G")
            leftDistanceToG[s] = 0;
        if(c+""=="T")
            leftDistanceToT[s] = 0;
    }    
    
    
    var ret = new Array(P.length).fill(0);
    for (var k = 0; k < ret.length; k++){
        var p = P[k];
        var q = Q[k];
        var maxLeft = q - p;
        if(leftDistanceToA[q] <= maxLeft)
            ret[k] = 1;
        else if(leftDistanceToC[q] <= maxLeft)
            ret[k] = 2;
        else if(leftDistanceToG[q] <= maxLeft)
            ret[k] = 3;
        else if(leftDistanceToT[q] <= maxLeft)
            ret[k] = 4;
    }
    return ret;
}


            