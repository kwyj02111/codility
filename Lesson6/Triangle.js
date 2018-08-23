function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sortA = A.sort((a,b) => {
        return b-a;
    });

    for(let i=0; i<sortA.length-1; i++){
        if(sortA[i] + sortA[i+1] > sortA[i+2]){
            if(sortA[i] + sortA[i+2] > sortA[i+1]){
                if(sortA[i+1] + sortA[i+2] > sortA[i]){
                    return 1;
                }
            }
        }
    }

    return 0;
}