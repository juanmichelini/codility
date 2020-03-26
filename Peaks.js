//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length < 3)
        return 0;
        
    for(var e = 1; e <= A.length; e ++){
        if(A.length%e != 0)
            continue;
        
        var peaksLen = 0;
        var countBlocks = 0;
        for(var i = 1; i < A.length - 1 ; i++){
            if(A[i-1] < A[i] && A[i] > A[i+1]){
                peaksLen++;
            }
            if((i+1)%e == 0){
                if(peaksLen>0){
                    countBlocks++;
                    peaksLen = 0;  
                }   
                else{
                    peaksLen = 0;   
                    countBlocks = 0;
                    break;
                }
            }
        }
        if(peaksLen > 0){
            return countBlocks+1;
        }
    }
   
    return 0;
    
}


            