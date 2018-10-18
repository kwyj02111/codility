function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.length < 2){
        return 0;
    }

    let profit = A[1] - A[0];
    let localProfit = A[1] - A[0];
    let min = A[0];

    for(let i=1; i<A.length; i++){
        if(A[i] <= min){
            min = A[i];
            continue;
        }

        localProfit = A[i] - min;
        profit = Math.max(profit, localProfit);
    }

    if(profit < 0){
        profit = 0;
    }

    return profit
}