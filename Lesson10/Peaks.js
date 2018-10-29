function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let len = A.length;
    if(len < 3){
        return 0;
    }

    let peak = [];
    for(let i=1; i<len-1; i++){
        if(A[i] > A[i-1] && A[i] > A[i+1]){
            peak.push(i);
        }
    }

    if(peak.length < 2){
        return peak.length;
    }

    let maxBlock = 1;
    for(let i=2; i<=peak.length; i++){

        if(len%i > 0){
            continue;
        }

        let blockRange = len/i;
        let blockStart = 0;
        let blockEnd = 1;
        let index = 0;
        let check = false;

        for(let j=0; j<i; j++){
            blockStart = j * blockRange;
            blockEnd = (j+1) * blockRange;
            check = false;

            while(index < peak.length && blockStart <= peak[index] && peak[index] < blockEnd){
                check = true;
                ++index;
            }

            if(!check){
                break;
            }
        }

        if(check){
            maxBlock = i;
        }
    }

    return maxBlock;
}