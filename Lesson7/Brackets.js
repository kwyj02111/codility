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
    let symbolArr = [];

    for(let i=0; i<array.length; i++){
        let len = symbolArr.length;
        switch(array[i]){
            case '(':
                symbolArr.push('tuple');
                break;
            case ')':
                if(len < 1 || symbolArr[len-1] !== 'tuple'){
                    return 0;
                }
                symbolArr.splice(len-1,1);
                break;

            case '[':
                symbolArr.push('arr');
                break;
            case ']':
                if(len < 1 || symbolArr[len-1] !== 'arr'){
                    return 0;
                }
                symbolArr.splice(len-1,1);
                break;

            case '{':
                symbolArr.push('dic');
                break;
            case '}':
                if(len < 1 || symbolArr[len-1] !== 'dic'){
                    return 0;
                }
                symbolArr.splice(len-1,1);
                break;

            default:
                break;
        }
    }

    if(symbolArr.length > 0){
        return 0;
    }

    return 1;
}