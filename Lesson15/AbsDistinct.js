function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    for(let i=0; i<A.length; i++){
        if(A[i] >= 0){
            break;
        }

        A[i] = Math.abs(A[i]);
    }

    let uniq = A.sort();
    uniq = uniq.filter((value, idx, array) => {
        return value!==array[idx-1];
    })

    return uniq.length;
}