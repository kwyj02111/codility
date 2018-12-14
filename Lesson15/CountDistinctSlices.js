function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let numCheck = [];
    let cnt = 0;

    for(let i=0; i<A.length; i++){
        let num = A[i];
        let compareIdx = i+1;
        let compareNum = A[compareIdx];

        numCheck[num] = true;

        while(numCheck[compareNum] === undefined && compareIdx < A.length){
            numCheck[compareNum] = true;
            compareIdx += 1;
            compareNum = A[compareIdx];
        }

        cnt += compareIdx - i;

        if(cnt > 1000000000){
            return 1000000000;
        }

        numCheck = [];
    }

    return cnt;
}
