//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    var fishDown = new Array();
    var freeFishUp = 0;
    for(var i = 0; i < A.length; i++){
        var goingUp = B[i] == 0;
        if(goingUp){
             while((fishDown.length >= 1)){
                var pop = fishDown.pop();
                if(pop>A[i]){
                    fishDown.push(pop);
                    break;
                }
             }
             if(fishDown.length<1)
                freeFishUp++;
        }else{
            fishDown.push(A[i]);
        }
    }
    var freeFishDown = fishDown.length;
    return freeFishDown + freeFishUp;
    
}

            