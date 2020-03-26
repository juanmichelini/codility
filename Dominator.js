//Score: 100%
              function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var count = new Object();
    var len = A.length;
    for(var i=0; i<len; i++){
        var cur = A[i];
        if(count[cur] == undefined)
            count[cur] = [1, i]
        else
            count[cur][0] = count[cur][0] + 1;
    }
    
    var ret = -1;
    var middle = len / 2;
    for (var key in count){
       if(count[key][0] > middle){
           ret = count[key][1];
           break;
       }   
    }
    return ret;
}
            