function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.length < 2){
        return A.length;
    }

    let surviveCnt = 0;
    let downfish = [];

    for(let i=0; i<A.length; i++){
        if(B[i] === 1){
            downfish.push(A[i]);
        }else{
            surviveCnt++;
            if(downfish.length < 1){
                continue;
            }

            while(true){
                if(A[i] > downfish[downfish.length-1]){

                    downfish.splice(downfish.length-1,1);

                    if(downfish.length < 1){
                        break;
                    }
                }else{
                    surviveCnt--;
                    break;
                }
            }
        }
    }

    return surviveCnt + downfish.length;
}

