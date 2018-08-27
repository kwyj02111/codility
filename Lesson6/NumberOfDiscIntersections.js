function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let rangeArr = [];
    let cnt = 0;

    for(let i=0; i<A.length; i++){
        let value = {
            'min' : i - A[i],
            'max' : i + A[i],
        }
        rangeArr.push(value);
    }

    let sortRangeArr = rangeArr.sort((a, b) => {
        return a.min - b.min;
    });

    for(let i=0; i<rangeArr.length-1; i++){
        for(let j=i+1; j<rangeArr.length && rangeArr[i].max >= rangeArr[j].min; j++){
            cnt += 1;

            if(cnt > 10000000){
                return -1;
            }
        }
    }

    return cnt;
}