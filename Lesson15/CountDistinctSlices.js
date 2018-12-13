function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let numCheck = [];
    for(let i=0; i<=M; i++){
        numCheck.push(false);
    }

    let cnt = A.length;

    for(let i=0; i<A.length-1; i++){
        let num = A[i];
        let compareIdx = i+1;
        let compareNum = A[compareIdx];

        numCheck[num] = true;

        while(!numCheck[compareNum] && compareIdx < A.length){
            cnt += 1;
            numCheck[compareNum] = true;
            compareIdx += 1;
            compareNum = A[compareIdx];
        }

        numCheck.fill(false);
    }

    return cnt;
}