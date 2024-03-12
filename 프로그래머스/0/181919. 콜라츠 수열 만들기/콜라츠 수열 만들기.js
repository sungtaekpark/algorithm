const exchanger = (number) => {
    let target = number;
    const ar = number % 2 === 0 ? number/2 : (3*number)+1;
    return ar;
}

function solution(n) {
    const arr = [];
    let target = n;
    while(target !== 1) {
        arr.push(target);
        target = exchanger(target);
    };
    //
    arr.push(1);
    return arr;
}


// 재귀를 쓰고 싶더라;
// function solution(n, arr = []) {
//     arr.push(n);
//     if (n === 1) return arr;
//     if (n % 2 === 0) return solution(n / 2, arr);
//     return solution(3 * n + 1, arr);
// }