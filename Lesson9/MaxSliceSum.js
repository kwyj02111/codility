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


    let maxSum = A[0];

    for(let i=0; i<A.length; i++){
        let sum = A[i];

        if(sum > maxSum){
            maxSum = sum;
        }

        for(let j=i+1; j<A.length; j++){
            sum = sum + A[j];

            if(sum > maxSum){
                maxSum = sum;
            }
        }
    }

    return maxSum;
}