function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(X === Y){
        return 0;
    }

    if(Y-X < D){
        return 1;
    }

    let result = parseInt((Y-X)/D);
    let rest = (Y-X)%D;

    if(rest === 0){
        return result;
    }else{
        return result+1;
    }
}