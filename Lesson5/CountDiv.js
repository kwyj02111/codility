function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A === B){
        if(A%K === 0){
            return 1;
        }
        return 0;
    }

    let aResult = parseInt(A/K);
    let aRest = A%K;
    let bResult = parseInt(B/K);
    let bRest = B%K;

    if(aRest === 0){
        return bResult-aResult +1;
    }else{
        return bResult-aResult;
    }
}