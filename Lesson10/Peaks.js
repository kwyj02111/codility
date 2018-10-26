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

    if(peak.length < 1){
        return 0;
    }

    let maxBlock = 1;
    for(let i=2; i<=peak.length; i++){

        if(len%i > 0){
            continue;
        }

        let blockRange = len/(i);
        let blockStartNum = 0;
        let blockEndNum = 1;

        let check = false;
        for(let j=0; j<peak.length; j++){

            let peakIdx = peak[j];

            if(peakIdx < (blockRange*blockStartNum)){
                if(j === peak.length-1){
                    check = true;
                    break;
                }

                continue;
            }

            if(peakIdx < (blockRange*blockEndNum)){
                blockStartNum++;
                blockEndNum++;
            }else{
                check = true;
                break;
            }
        }

        if(!check){
            maxBlock = len/blockRange;
        }
    }

    return maxBlock;
}