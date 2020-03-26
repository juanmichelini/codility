//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var countOpenWithoutClose = 0;
    for(var i = 0; i < S.length; i++){
        var c = S.charAt(i);
        if(c + ""  == "("){
            countOpenWithoutClose++;
        }else if(c + ""  == ")"){
            countOpenWithoutClose--;
        }
        if(countOpenWithoutClose<0)
            break;
    }
    return countOpenWithoutClose == 0 ? 1 : 0;
    
}

            