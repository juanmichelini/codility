//Score: 100%
              var sortedPlanks = new Array();
function solution(A, B, C) {
    
    var sortedPlanks = new Array(A.length);
    for(var i = 0; i < A.length; i++){
        sortedPlanks[i] = [A[i], B[i]]
    }
    sortedPlanks = sortedPlanks.sort((a,b) => ((a[0] + a[1])  - (b[0] + b[1])) || (a[0]  - b[0]) || (a[1]  -  b[1]));
    //order nails, but rememeber original index
    var sortedNails = new Array(C.length);
    for(var i = 0; i < C.length; i++){
        sortedNails[i] = [i+1, C[i]]
    }
    sortedNails = sortedNails.sort((a,b) => a[1] - b[1]);
    var index = -1;
    var last = [-1,-1];
    for(var i = 0; i < sortedPlanks.length; i++){
        var a = sortedPlanks[i][0];
        var b = sortedPlanks[i][1];
        if(last[0] == a || last[1] == b)
            continue;
        else
            last = sortedPlanks[i]
        var curNail = getMinimunNail(a, b, sortedNails, index);
        if(curNail == -1)
            return -1;
        index = Math.max(curNail, index);
    }
    
    return index;
}

function getMinimunNail(a,b,sortedNails, index){
     var lowestNailOverA = +Infinity;

     var floor = 0;
     var ceil = sortedNails.length - 1;
     while(floor <= ceil){
        var mid = Math.ceil((floor+ceil)/2);

        if(sortedNails[mid][1] < a){
            floor = mid + 1;
        }else if(sortedNails[mid][1] > a && (mid-1>0) && (sortedNails[mid-1][1] >= a)){
            ceil = mid - 1;
        }else{
            lowestNailOverA = mid;
            ceil = mid - 1;
            if(sortedNails[mid][0]<index)
              return index;
        }
     }
     if(lowestNailOverA == +Infinity)
        return -1;
     
     var nailPos = +Infinity;
     for(var i = lowestNailOverA; i < sortedNails.length; i++){
        if(sortedNails[i][1] > b){
            break;
        }
        nailPos = Math.min(sortedNails[i][0], nailPos);
        if(nailPos<index)
            return nailPos;
     }
     return nailPos != +Infinity ? nailPos : -1;
 }
            