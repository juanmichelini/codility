//Score: 100%
              function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var sorted = A.sort((a,b)=> a - b);
    var triangles = 0;
    var c = 0;
    var q = 0;
    var p = 0;
    for(var r = A.length-1; r > 1; r--){
        c = sorted[r];
        q = r-1;
        p = 0;
        while(p < q){
            if(sorted[p]+sorted[q]>c){
                triangles += q-p;
                q--;
            }else{
                p++;
            }
        }
    }
    return triangles;
}

function isTriangle(a,b,c){
    return  (a + b > c);// && (a + c > b) && (b + c > a); not needed, because of order
}
            