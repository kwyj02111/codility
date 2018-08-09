function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let length = A.length;

    if(length < 1){
        return 1;
    }

    let N = length+1;
    let all = N*(N+1)*0.5; //등차수열 전체 합

    let total = 0;
    for(let i=0; i<length; i++){
        total = total + A[i];
    }

    return all-total;
}