//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    var floor = -Infinity;
    var ceil = 0;
    for(var i=0; i < A.length; i++){
        floor = Math.max(floor, A[i]);
        ceil += A[i];
    }
    
    var minLargeSum = ceil;
    while(floor <= ceil){
        var mid = Math.ceil((floor+ceil)/2);
        var curk = group(A, mid);
        if(curk > K){
            floor = mid + 1;
        }else{
            minLargeSum = Math.min(minLargeSum, mid);
            ceil = mid - 1;
        }   
    }
    return minLargeSum;
}

function group(A, mid){
    var k = 1;
    var sum = 0;
    for(var i=0; i < A.length; i++){
        var next = sum + A[i];
        if(next > mid){
            sum = A[i];
            k++;
        }else{
            sum = next;       
        }
    }
    return k;
}
            