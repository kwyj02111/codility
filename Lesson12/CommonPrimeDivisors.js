function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cnt = 0;

    for(let i=0; i<A.length; i++){

        if(A[i] === 1 && B[i] === 1){
            cnt += 1;
            continue;
        }

        let gcdValue = gcd(A[i], B[i]);

        if(gcdValue <= 1){
            continue;
        }

        let check = sameCheck(gcdValue, A[i], B[i]);
        if(check){
            cnt += 1;
        }
    }

    return cnt;
}

function gcd(a, b){
  return a % b ? gcd(b, a%b) : b
}

function sameCheck(gcdValue, a, b){

    let gcdA = 0;
    let gcdB = 0;

    while(gcdA !== 1){
        gcdA = gcd(a, gcdValue);
        a = a/gcdA;
    }

    while(gcdB !== 1){
        gcdB = gcd(b, gcdValue);
        b = b/gcdB;
    }

    if(a === 1 && b === 1){
        return true;
    }else{
        return false;
    }
}