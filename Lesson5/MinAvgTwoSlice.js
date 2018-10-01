function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let minAvg = (A[0] + A[1]) / 2;
    let minStart = 0;

    for(let i=2; i<A.length; i++){
        let avg = (A[i] + A[i-1]) / 2;
        if(avg < minAvg){
            minAvg = avg;
            minStart = i-1;
        }

        avg = (A[i] + A[i-1] + A[i-2]) / 3;
        if(avg < minAvg){
            minAvg = avg;
            minStart = i-2;
        }
    }

    return minStart;
}