function solution(N, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    let semiprime = [];
    let result = [];

    for(let i=1; i<=N; i++){
        let check = checkSemiprime(i);
        if(check){
            semiprime.push(i);
        }
    }

    for(let i=0; i<P.length; i++){
        let rangeFilter = semiprime.filter((value) => {
            return value>=P[i] && value<=Q[i];
        });

        result.push(rangeFilter.length);
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