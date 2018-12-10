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

        let lcmValue = lcm(A[i], B[i]);
        let rest = lcmValue/gcdValue;
        let gcd_restAndGcd = 0;

        while( gcd_restAndGcd !== 1) {
            gcd_restAndGcd = gcd(gcdValue, rest);
            rest = rest/gcd_restAndGcd ;
        }

        if(rest === 1){
            cnt += 1;
        }
    }

    return cnt;
}

function gcd(a, b){
  return a % b ? gcd(b, a%b) : b
}

function lcm(a, b){
  return a * b / gcd(a, b);
}