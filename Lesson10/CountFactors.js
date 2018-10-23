function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let array = [];
    for(let i=1; i*i<=N; i++){
        if(N%i === 0){
            array.push(i);

            if(i !== N/i){
                array.push(N/i);
            }
        }
    }

    return array.length;
}