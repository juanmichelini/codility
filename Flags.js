//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 3)
        return 0;
        
    var peaks = new Array(Math.ceil(A.length/2) + 2);
    var peaksLen = 0;
    var distance = -Infinity;
    for(var i = 1; i < A.length - 1 ; i++){
        if(peaksLen!=0)
            distance++;
        if(A[i-1] < A[i] && A[i] > A[i+1]){
            peaks[peaksLen] = distance;
            peaksLen++;
            distance = 0;
        }
    }
    
    if(peaksLen < 1)
        return 0;
        
    var countPeaks = 0;
    var minDistance = Math.min(Math.ceil(Math.sqrt(A.length)), peaksLen);
    while(countPeaks <= minDistance){
        var curDistance = 0;
        var curCountPeaks = 1;
        for(var i=1; i < peaksLen ; i++){
            curDistance += peaks[i];
            if(curDistance >= minDistance){
                curCountPeaks ++;
                if(curCountPeaks == minDistance){
                    break;
                }
                curDistance = 0;
            }
        }
        minDistance--;
        if(curCountPeaks > countPeaks)
            countPeaks = curCountPeaks;
    }
    return countPeaks;
    
}
            