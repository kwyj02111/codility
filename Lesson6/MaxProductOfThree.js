function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sortA = A.sort((a,b) => {
        return b-a;
    });

    let positiveA = A.filter((value, idx, array) => {
        return value >= 0;
    });

    let length = sortA.length;
    let positiveLength = positiveA.length;

    //모두 양수 혹은 음수일 때, 음수값이 한개만 있을 때
    if(length - positiveLength < 2 || positiveLength === 0){
        return sortA[0] * sortA[1] * sortA[2];
    }

    // 양수값이 한개만 있을 때
    if(positiveLength === 1){
        return sortA[0] * sortA[length-1] * sortA[length-2];
    }

    let twoNegaOnePosi = sortA[length-1] * sortA[length-2] * sortA[0];
    let allPositive = sortA[0] * sortA[1] * sortA[2];

    if(allPositive > twoNegaOnePosi){
        return allPositive;
    }else{
        return twoNegaOnePosi;
    }
}