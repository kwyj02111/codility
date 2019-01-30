function solution(K, C, D) {
    // write your code in JavaScript (Node.js 8.9.4)

    let maxSocks = 0;
    let sockArray = [];

    for(let i=0; i<C.length; i++){
        let findIndex = sockArray.indexOf(C[i]);

        if(findIndex < 0){
            sockArray.push(C[i]);
        }else{
            sockArray.splice(findIndex,1);
            maxSocks += 1;
        }
    }

    if(sockArray.length > 0){
        for(let i=0; i<D.length; i++){
            let findIndex = sockArray.indexOf(D[i]);

            if(findIndex >= 0){
                sockArray.splice(findIndex,1);
                maxSocks += 1;
                K -= 1;
            }

            if(K === 0){
                return maxSocks;
            }
        }
    }

    if(K < 2){
        return maxSocks;
    }

    sockArray = [];

    for(let i=0; i<D.length; i++){
        let findIndex = sockArray.indexOf(D[i]);

        if(findIndex < 0){
            sockArray.push(D[i]);
        }else{
            sockArray.splice(findIndex,1);
            maxSocks += 1;
            K -= 2;
        }

        if(K < 2){
            return maxSocks;
        }
    }

    return maxSocks;
}