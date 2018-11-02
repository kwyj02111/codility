function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)

    return N / gcd(N, M);
}

function gcd(a, b) {
    if(a%b === 0){
        return b;
    }else{
        return gcd(b, a%b);
    }
}