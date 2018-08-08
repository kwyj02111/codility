function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)

    // a가 배열, K가 수
    let result = A;
    let aLength = A.length;
    let div = K%aLength;

    if(div === 0 || aLength === 1){
        return result;
    }

    let uniq = A.filter((value, idx, array) => {
        return value!==array[idx-1];
    })

    if(uniq.length === 1){
        return result;
    }

    for(let i = 0; i<div; i++){
        let lastValue = A[aLength-1];
        A.splice(aLength-1, 1);
        A.unshift(lastValue);
    }

    return A;
}