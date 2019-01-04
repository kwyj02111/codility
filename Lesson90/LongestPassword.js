function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let array = S.split(' ');
    let max = 0;

    for(let i=0; i<array.length; i++){
        let valid = validCheck(array[i]);

        if(valid && max < array[i].length){
            max = array[i].length;
        }
    }

    if(max === 0){
        return -1;
    }else{
        return max;
    }
}

function validCheck(str){
    if(str === undefined || str === null || str === ''){
        return false;
    }

    let strChar = str.replace(/[0-9a-zA-Z]/g,"");
    if(strChar.length > 0){
        return false;
    }

    let strLetter = str.replace(/[^a-zA-Z]/g,"");
    if(strLetter.length%2  !== 0){
        return false;
    }

    let strDigit = str.replace(/[^0-9]/g,"");
    if(strDigit.length%2  === 0){
        return false;
    }

    return true;
}