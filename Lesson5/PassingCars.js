function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let zeroCnt = 0;
    let result = 0;

    for(let i=0; i<A.length; i++){
        if(A[i] === 0){
            zeroCnt++;
        }else{
            result = result + zeroCnt;
        }
    }

    if(result < 0 || result > 1000000000){
        return -1;
    }

    return result;
}