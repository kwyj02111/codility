function solution(A, X) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cnt = 0;
    let numCheck = [];
    let twoOrMore = [];
    let fourOrMore = [];

    for(let i=0; i<A.length; i++){
        let val = A[i];

        if(numCheck[val] === undefined){
            numCheck[val] = 1;
        }else{
            numCheck[val] += 1;
        }

        if(numCheck[val] === 2){
            twoOrMore.push(val);
        }

        if(numCheck[val] === 4){
            fourOrMore.push(val);
        }
    }

    if(twoOrMore.length < 1){
        return 0;
    }

    twoOrMore = twoOrMore.sort((a, b) => {
        return b - a;
    });

    fourOrMore = fourOrMore.sort((a, b) => {
        return b - a;
    });

    for(let i=0; i<twoOrMore.length-1; i++){
        let standard = twoOrMore[i];
        let nextIdx = i+1;
        let portion = Math.ceil(X / standard);

        while(nextIdx < twoOrMore.length){
            if(twoOrMore[nextIdx] < portion){
                break;
            }

            nextIdx += 1;
            cnt += 1;
        }
    }

    for(let i=0; i<fourOrMore.length; i++){
        let portion = Math.ceil(X / fourOrMore[i]);
        if(fourOrMore[i] < portion){
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