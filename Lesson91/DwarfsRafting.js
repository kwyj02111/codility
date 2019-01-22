function solution(N, S, T) {
    // write your code in JavaScript (Node.js 8.9.4)

    let half = N/2;
    let barrel = S.split(' ');
    let occupied = T.split(' ');

    if(S.length < 1){
        barrel = [];
    }

    if(T.length < 1){
        occupied = [];
    }

    let leftFront = half*half;
    let leftBack = half*half;
    let rightFront = half*half;
    let rightBack = half*half;

    for(let i=0; i<barrel.length; i++){
        let seat = barrel[i];
        let length = seat.length;

        let alphabet = seat.substring(seat.length-1, seat.length);
        alphabet = alphabet.charCodeAt(0) - 64;
        let number = seat.substring(0, seat.length-1);

        if(number <= half){
            if(alphabet <= half){
                leftFront -= 1;
            }else{
                leftBack -= 1;
            }
        }else{
            if(alphabet <= half){
                rightFront -= 1;
            }else{
                rightBack -= 1;
            }
        }
    }

    let ridableLF = Math.min(leftFront, rightBack);
    let ridableLB = Math.min(leftBack, rightFront);
    let ridableRF = Math.min(leftBack, rightFront);
    let ridableRB = Math.min(leftFront, rightBack);

    for(let i=0; i<occupied.length; i++){
        let seat = occupied[i];
        let length = seat.length;

        let alphabet = seat.substring(seat.length-1, seat.length);
        alphabet = alphabet.charCodeAt(0) - 64;
        let number = seat.substring(0, seat.length-1);

        if(number <= half){
            if(alphabet <= half){
                ridableLF -= 1;
            }else{
                ridableLB -= 1;
            }
        }else{
            if(alphabet <= half){
                ridableRF -= 1;
            }else{
                ridableRB -= 1;
            }
        }
    }

    if(ridableLF < 0 || ridableLB < 0 || ridableRF < 0 || ridableRB < 0){
        return -1;
    }

    let total = ridableLF + ridableLB + ridableRF + ridableRB;
    return total;
}