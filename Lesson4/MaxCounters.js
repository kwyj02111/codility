function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let array = [];
    for(let i =0; i<N; i++){
        array.push(0);
    }

    let min = 0;
    let max = 0;

    for(let i=0; i<A.length; i++){
        let value = A[i];

        if(value <= N){
            let idx = value-1;
            if(array[idx] < min){
                array[idx] = min + 1;
            }else {
                array[idx]++;
            }

            if(array[idx] > max){
                max = array[idx];
            }
        }else{
            min = max;
        }
    }

    for(let i=0; i<N; i++){
        if(array[i] < min){
            array[i] = min;
        }
    }

    return array;
}