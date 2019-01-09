function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let len = A.length;

    if(len < 3){
        return 0;
    }

    let highestIdx = 0;
    let lowestIdx = 0;
    let max = 0;

    for(let i=1; i<len; i++){
        let current = A[i];
        let highest = A[highestIdx];
        let lowest = A[lowestIdx];

        if(current > highest){
            max = Math.max(highest - lowest, max);
            highestIdx = i;
            lowestIdx = i;
            continue;
        }

        if(current > lowest){
            max = Math.max(current - lowest, max);
        }else{
            lowestIdx = i;
        }
    }

    return max;
}