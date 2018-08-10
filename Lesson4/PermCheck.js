function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 순열이면 1, 아니면 0

    if(A.length === 1 && A[0] === 1){
        return 1;
    }

    let sortA = A.sort((a,b) => {
        return a-b;
    })

    for(let i=0; i<sortA.length-1; i++){
        if(sortA[i+1] - sortA[i] !== 1){
            return 0;
        }
    }

    if(sortA[0] !== 1){
        return 0;
    }

    return 1;
}