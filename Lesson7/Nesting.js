function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let length = S.length;
    if(length === 0){
        return 1;
    }
    if(length%2 !== 0){
        return 0;
    }

    let array = S.split('');
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] === '('){
            count++;
        }else{
            if(count <= 0){
                return 0;
            }
            count = count-1;
        }
    }

    if(count > 0){
        return 0;
    }

    return 1;
}