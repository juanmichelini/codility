//Score: 100%
              
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    chargeFibs(A.length);
        
    var gotTo = [-1];
    var jumps = 0;
    while(gotTo.length!=0){
        jumps++;
        var newgotTo = new Array();
        for(var i = 0; i<gotTo.length; i++){
               for(var j = 0; j<fibsArr.length; j++){
                var pos =  fibsArr[j] + gotTo[i];
                if(pos > A.length)
                    break;
                if(pos == A.length){
                    return jumps;
                }
                if(A[pos] == 1){
                    newgotTo.push(pos);
                    A[pos] = 0; 
                }
            }
        }
        gotTo = newgotTo;
    }
    return -1;
    
}


var fibsArr = new Array();
function chargeFibs(N){
    fibsArr =  new Array();   
    var a = 1;
    var b = 1;
    fibsArr.push(1);
    for(var i = 2; i < N + 2; i++){
        var newb = a + b;
        fibsArr.push(newb);
        a = b;
        b = newb;
    }
}
            