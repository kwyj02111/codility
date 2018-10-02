function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.length < X){
        return -1;
    }

    let array = [];
    let count = 0;

    for(let i=0; i<X; i++){
        array.push(false);
    }

    for(let i=0; i<A.length; i++){
        let idx = A[i]-1;

        if(!array[idx]){
            array[idx] = true;
            count++;
        }

        if(count === X){
            return i;
        }
    }

    return -1;
}