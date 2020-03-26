//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var opened = new Array();
    var canOpen = ["(","[","{"];
    for(var i = 0; i < S.length; i++){
        var c = S.charAt(i) + "";
        if(canOpen.includes(c)){
            opened.push(c);
        } else{
            if(opened.length < 1){
                return 0;
            }
            var match =  matching(c);
            var pop = opened.pop();
            if (pop != match)
                return 0;
        }
    }
    return opened.length < 1 ? 1 : 0;
    
}

function matching( c){
    if(c  == ")"){
        return "(";
    }else if(c  == "]"){
        return "[";
    }else if(c  == "}"){
        return "{"
    }
}


            