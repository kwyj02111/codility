function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cnt = 0;

    for(let i=0; i<A.length; i++){
        let primeDivA = getPrimeDivisor(A[i]);
        let primeDivB = getPrimeDivisor(B[i]);

        if(check(primeDivA, primeDivB)){
            cnt += 1;
        }
    }

    return cnt;
}

function getPrimeDivisor(num){
    let array = [];

    for(let i=2; num>1; i++){
        let cnt = 0;
        while(num%i === 0){
            num = num/i;
            cnt += 1;

            if(cnt === 1){
                array.push(i);
            }
        }
    }

    return array;
}

function check(a, b) {

    if(a.length !== b.length){
        return false;
    }

    return a.every((row, index) => {
        return a[index] === b[index];
    });
}