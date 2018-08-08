function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let binary = N.toString(2);
    let array = binary.split('1');

    let cnt = 0;
    for(let i=0; i<array.length-1; i++){
        if(array[i].length >= cnt){
            cnt = array[i].length;
        }
    }

    return cnt;
}