//Score: 100%
              function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var first3 = new Array(3).fill(-Infinity);
    var last2 = new Array(2).fill(+Infinity);
    for(var i = 0; i<A.length; i++){
       // if(!triplet.includes(A[i]))   {
            if(first3[2] < A[i]){
                first3[2] = A[i];
                first3.sort((a,b)=>b-a);
            }
            if(last2[0] > A[i]){
                last2[0] = A[i];
                last2.sort((a,b)=>b-a);
            }
      //  }
    }
    result = Math.max(first3.reduce((a, b) => a * b), first3[0] * last2.reduce((a, b) => a * b));
    return result;
}
            