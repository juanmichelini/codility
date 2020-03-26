//Score: 100%
              

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var maxDepth = 0;
    var leftPeakHeight = A[0];
    var curLowestPeakHeight = A[0];
    var curHeight = 0;
    for(var i  = 1; i < A.length; i++){
        curHeight = A[i];
        curLowestPeakHeight = Math.min(curLowestPeakHeight, curHeight);
        if(curHeight > curLowestPeakHeight){
            maxDepth = Math.max(maxDepth,  Math.min(curHeight, leftPeakHeight) - curLowestPeakHeight);
        }
        if(curHeight >= leftPeakHeight){
            leftPeakHeight = curHeight;
            curLowestPeakHeight = leftPeakHeight; 
        }
        
    }
    return maxDepth;
}


            