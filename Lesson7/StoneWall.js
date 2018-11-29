function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)

    let cnt = 0;
    let heightArr = [];

    for(let i=0; i<H.length; i++){
        let len = heightArr.length;

        while(len > 0 && heightArr[len-1] > H[i]){
            heightArr.splice(len-1, 1);
            len = heightArr.length;
        }

        if(len < 1 || heightArr[len-1] < H[i]){
            heightArr.push(H[i]);
            cnt++;
        }
    }

    return cnt;
}