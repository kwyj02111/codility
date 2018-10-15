function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let count = {};
    let countReverse = {};
    let leader = [];
    let leaderReverse = [];

    for(let i=0; i<A.length; i++){
        let key = 'num' + A[i];

        if(count[key] === undefined){
            count[key] = 1;
        }else{
            count[key] = count[key] + 1;
        }

        let halfNum = 0;
        if((i+1)%2 > 0){
            halfNum = Math.ceil((i+1)/2);
        }else{
            halfNum = (i+1)/2 + 1;
        }

        let check = false;
        for(key in count) {
            if(count[key] >= halfNum){
                check = true;
                let leaderNum = key.replace('num','');
                leader.push(leaderNum);
                break;
            }
        }

        if(!check){
            leader.push(null);
        }
    }

    for(let i=A.length-1; i>0; i--){
        let key = 'num' + A[i];

        if(countReverse[key] === undefined){
            countReverse[key] = 1;
        }else{
            countReverse[key] = countReverse[key] + 1;
        }

        let halfNum = 0;
        let num = A.length - i;
        if(num%2 > 0){
            halfNum = Math.ceil(num/2);
        }else{
            halfNum = num/2 + 1;
        }

        let check = false;
        for(key in countReverse) {
            if(countReverse[key] >= halfNum){
                check = true;
                let leaderNum = key.replace('num','');
                leaderReverse.unshift(leaderNum);
                break;
            }
        }

        if(!check){
            leaderReverse.unshift(null);
        }
    }

    let leaderCount = 0;
    for(let i=0; i<leader.length; i++){
        if(leader[i] === leaderReverse[i] && leader[i] !== null){
            leaderCount++;
        }
    }

    return leaderCount;
}