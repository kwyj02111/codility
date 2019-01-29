function solution(P, C) {
    // write your code in JavaScript (Node.js 8.9.4)

    let pair = Math.floor(P/2);

    if(pair >= C){
        return C;
    }else{
        return pair;
    }
}