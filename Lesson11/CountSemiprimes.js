function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    let semiprime = [];
    let count = [0];
    let result = [];

    for(let i=1; i<=N; i++){
        let check = checkSemiprime(i);
        if(check){
            semiprime.push(i);
        }

        count.push(0);
    }

    for(let i=0; i<semiprime.length; i++){

        let startIdx = semiprime[i];
        let nextIdx = 0;

        if(i !== semiprime.length-1){
            nextIdx = semiprime[i+1];
        }else{
            nextIdx = count.length;
        }

        while(startIdx < nextIdx){
            count[startIdx] = i+1;
            startIdx += 1;
        }
    }

    for(let i=0; i<P.length; i++){
        let num = count[Q[i]] - count[P[i]-1];
        result.push(num);
    }

    return result;
}

function checkSemiprime(num){

    let checkCnt = 0;
    for(let i=2; checkCnt<2 && i*i<=num; i++){
        while(num%i===0){
            num = num/i;
            checkCnt += 1;
        }
    }

    if(num > 1){
        checkCnt += 1;
    }

    return checkCnt === 2 ? true : false;
}