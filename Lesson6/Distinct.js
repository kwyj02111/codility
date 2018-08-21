function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let uniq = A.sort();
    uniq = uniq.filter((value, idx, array) => {
        return value!==array[idx-1];
    })

    return uniq.length;
}