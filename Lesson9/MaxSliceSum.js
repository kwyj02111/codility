function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arrMax = Math.max.apply(null, A);
    let arrMin = Math.min.apply(null, A);

    if(arrMax < 0){
        return arrMax;
    }

    if(arrMin >= 0){
        let sum = 0;
        for(let i=0; i<A.length; i++){
            sum = sum + A[i];
        }

        return sum;
    }

    let localMax = A[0];
    let totalSum = A[0];

    for (let i=1; i<A.length; i++) {
        let nextSum = localMax+A[i];
        localMax = Math.max(A[i], nextSum);
        totalSum = Math.max(totalSum, localMax);
    }

    return totalSum;
}