function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cntArr = [];

    for(let i=0; i<A.length; i++){
        let num = A[i];
        let divArr = [];

        for(let j=1; j*j<=num; j++){
            if(num%j === 0){
                divArr.push(j);

                if(j !== num/j){
                    divArr.push(num/j);
                }
            }
        }

        let diffArr = diff(A, divArr);
        cntArr.push(diffArr.length);
    }

    return cntArr;
}

function diff(array1, array2){
    return  array1.filter((i) =>{
        return array2.indexOf(i) < 0;
    });
}