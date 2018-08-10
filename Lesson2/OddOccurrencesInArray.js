function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sortA = A.sort();
    let portion = parseInt((sortA.length)/2);

    for(let i=0; i<portion; i++){
        let idx = i*2;
        if(sortA[idx] !== sortA[idx+1]){
            return sortA[idx];
        }
    }

    return sortA[sortA.length-1];
}