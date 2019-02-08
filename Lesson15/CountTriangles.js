function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let count = 0;
    let sortA = A.sort((a, b) => {
        return a - b;
    });

    if(sortA.length < 3){
        return count;
    }

    for(let i=0; i<sortA.length-2; i++){
        let first = sortA[i];
        let middleIdx = i+1;
        let lastIdx = i+2;

        while(lastIdx < sortA.length){
            if(first + A[middleIdx] > A[lastIdx]){
                count += 1;
                lastIdx += 1;

                if(lastIdx === sortA.length){
                    middleIdx += 1;
                    lastIdx = middleIdx + 1;
                }
                continue;
            }

            middleIdx += 1;
            lastIdx = middleIdx + 1;
        }
    }

    return count;
}