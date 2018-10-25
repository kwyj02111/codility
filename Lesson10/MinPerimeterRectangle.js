function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minPerimeter = 2*(1+N);
    let calcPerimeter = 0;

    for(let i=1; i*i<=N; i++){
        if(N%i === 0){

            let A = i;
            let B = N/i;
            calcPerimeter = 2*(A+B);

            if(calcPerimeter < minPerimeter){
                minPerimeter = calcPerimeter;
            }
        }
    }

    return minPerimeter;
}