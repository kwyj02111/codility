function solution(A, X) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cnt = 0;
    let numCheck = [];

    for(let i=0; i<A.length; i++){
        let val = A[i];

        if(numCheck[val] === undefined){
            numCheck[val] = 1;
        }else{
            numCheck[val] += 1;
        }
    }

    let twoOrMore = [];
    let fourOrMore = [];

    for(let i=0; i<numCheck.length; i++){
        let value = numCheck[i];

        if(value > 1){
            twoOrMore.unshift(i);
        }

        if(value > 3){
            fourOrMore.unshift(i);
        }
    }

    if(twoOrMore.length < 1){
        return 0;
    }

    for(let i=0; i<twoOrMore.length-1; i++){
        let standard = twoOrMore[i];
        let nextIdx = i+1;

        while(nextIdx < twoOrMore.length){
            let area = standard * twoOrMore[nextIdx];
            if(area < X){
                break;
            }

            nextIdx += 1;
            cnt += 1;
        }
    }

    for(let i=0; i<fourOrMore.length; i++){
        let area = fourOrMore[i] * fourOrMore[i];
        if(area < X){
            break;
        }

        cnt += 1;
    }

    if(cnt > 1000000000){
        return -1;
    }else{
        return cnt;
    }
}