//Score: 100%
              function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var len = A.length;
    
    var leadersL = A.slice(0);
    var leadersR = A.slice(0);
    
    chargeLeadersL(len, (n) =>  leadersL[n], ((n,v) =>  leadersL[n] = v));
    chargeLeadersL(len, (n) =>  leadersR[len - n - 1], ((n,v) =>  leadersR[len - n - 1] = v));
    

    var countEquiLeaders = 0;
    for(var s = 0; s<len-1; s++){
            if(leadersL[s] == leadersR[s+1] && leadersL[s] != NaN)
                countEquiLeaders++;
    }
    return countEquiLeaders;
}


function chargeLeadersL(len, readL, setL){
        var count = new Object();
        count[readL(0)] = 1;
        for(var i = 1; i < len; i++){
            var cur = readL(i)
            var prev = readL(i-1);
            
            //update counts
            if(count[cur] == undefined){
                count[cur] = 1;
            }else{
                count[cur] = count[cur] + 1;
            }
            //updateL
            var middle = (i + 1) / 2;
            if(count[cur] > middle){
                setL(i, cur);
            } else if(count[prev] > middle) {
                setL(i, prev);
            }else{
                setL(i, NaN);
            }
        }
}
            