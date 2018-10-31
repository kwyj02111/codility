function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)

    let chocoArr = [];
    let eatCount = 0;
    let eatNum = 0;

    for(let i=0; i<N; i++){
        chocoArr.push(false);
    }

    chocoArr[0] = true;
    eatCount += 1;


    while(N>0){
        eatNum = (eatNum + M)%N;

        if(!chocoArr[eatNum]){
            chocoArr[eatNum] = true;
            eatCount += 1;
        }else{
            break
        }
    }

    return eatCount;
}