//Score: 100%
              

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var maxLength = -1;
    var digits = 0;
    var letters = 0;
    var allAlphaNumeric = true;
    var code = 0;
    for(var i = 0; i < S.length; i++){
        code = S.charCodeAt(i);
        if(code == 32){
            if(allAlphaNumeric && digits % 2 == 1 && letters % 2 == 0){
                maxLength = Math.max(maxLength, digits+letters);
            }
            allAlphaNumeric = true;
            digits = 0;
            letters = 0;
        }else if(allAlphaNumeric) {
            if(code > 47 && code < 58){
                digits ++;
            }else if((code > 64 && code < 91) || (code > 96 && code < 123)){
                letters ++;
            }else{
                allAlphaNumeric = false;
            }
        }
        
    }
    if(allAlphaNumeric && digits % 2 == 1 && letters % 2 == 0){
        maxLength = Math.max(maxLength, digits+letters);
    }
    return maxLength;
}


            