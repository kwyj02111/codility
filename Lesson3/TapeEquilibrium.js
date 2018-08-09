function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let length = A.length;

    if(length < 3){
        return Math.abs(A[0]-A[1]);
    }

    let total = 0;
    let array = [];

    for(let i=0; i<length; i++){
        total = total + A[i];

        array.push(total);
    }

    let result = [];

    for(let j=0; j<length-1; j++){
        let value = Math.abs(2*array[j] - total);
        result.push(value);
    }

    return Math.min.apply(null, result);
}