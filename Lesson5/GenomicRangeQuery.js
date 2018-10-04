function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)

    let result = [];
    for(let i=0; i<P.length; i++){
        let value = S.slice(P[i], Q[i]+1);

        if(value.indexOf('A') >= 0){
            result.push(1);
            continue;
        }

        if(value.indexOf('C') >= 0){
            result.push(2);
            continue;
        }

        if(value.indexOf('G') >= 0){
            result.push(3);
            continue;
        }

        if(value.indexOf('T') >= 0){
            result.push(4);
        }
    }

    return result;
}