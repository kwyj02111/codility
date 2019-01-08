function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let len = A.length;

    if(len < 3){
        return 0;
    }

    let peak = [];
    for(let i=0; i<len; i++){

        if(i === 0 && A[i] > A[i+1]){
            peak.push(0);
            continue;
        }

        if(i === len-1 && A[i] > A[i-1]){
            peak.push(i);
            continue;
        }

        if(A[i] >= A[i-1] && A[i] >= A[i+1]){
            peak.push(i);
        }
    }

    if(peak.length < 2){
        return 0;
    }

    for(let i=1; i<peak.length-1; i++){
        if(A[peak[i]] < A[peak[i-1]] && A[peak[i]] < A[peak[i+1]]){
            peak.splice(i,1);
        }
    }

    let maxDepth = 0;

    for(let i=0; i<peak.length-1; i++){

        let startIdx = peak[i];
        let endIdx = peak[i+1];
        let index = peak[i]+1;
        let standardPeak = A[startIdx];

        if(A[startIdx] > A[endIdx]){
            standardPeak = A[endIdx];
        }

        while(index < endIdx){

            if(standardPeak - A[index] > maxDepth){
                maxDepth = standardPeak - A[index];
            }

            index += 1;
        }
    }

    return maxDepth;
}