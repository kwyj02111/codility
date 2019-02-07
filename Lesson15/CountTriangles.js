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

        if(first + sortA[middleIdx] <= sortA[lastIdx]){
            continue;
        }

        while(middleIdx < sortA.length-1){

            lastIdx = middleIdx + 1;

            while(lastIdx < sortA.length){
                let middle = sortA[middleIdx];
                let last = sortA[lastIdx];

                if(middle + last <= first || first + last <= middle || first + middle <= last){
                    break;
                }

                count += 1;
                lastIdx += 1;
            }

            middleIdx += 1;
        }
    }

    return count;
}