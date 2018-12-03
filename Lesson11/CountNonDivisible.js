function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let N = A.length;
    let count = [];
    let divisor = [];

    for(let i=0; i<N*2+1; i++){
        count.push(0);
        divisor.push(0);
    }

    for(let i=0; i<N; i++){
        let idx = A[i];
        count[idx] += 1;
    }

    for(let i=1; i<divisor.length; i++){
        let number = i;

        for(let j=1; j*j<=number; j++){

            if(number%j === 0){
                divisor[number] += count[j];

                if(j !== number/j){
                    divisor[number] += count[number/j];
                }
            }
        }
    }

    let result = [];
    for(let i=0; i<N; i++){
        let idx = A[i];
        result[i] = N - divisor[idx];
    }

    return result;
}