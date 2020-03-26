//Score: 100%
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    var m = M%N;
    if(m == 0)return 1;
    var div = Math.floor(N/m);
    var countChocoletsInModM = new Array(m);

    var mm = (m - N%m)%m;
    var total = 0;
    var i = 0;
    while(countChocoletsInModM[i] != true){
        total += i<N%m ? div + 1 : div;
        countChocoletsInModM[i] = true;
        i = (i+mm)%m;
    }
    
    return total;   
}
            