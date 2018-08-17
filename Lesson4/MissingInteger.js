function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let uniq = A.sort((a,b) => {
        return a-b;
    });

    uniq = uniq.filter((value, idx, array) => {
        return value!==array[idx-1] && value > 0;
    })

    if(uniq.length < 1){
        return 1;
    }

    let result = 1;
    for(let a=0; a<uniq.length; a++){
        if(uniq[a] === result){
            result++;
        }else{
            return result;
        }
    }

    return result;
}