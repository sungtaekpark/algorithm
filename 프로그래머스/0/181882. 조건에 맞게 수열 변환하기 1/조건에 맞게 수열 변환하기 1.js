function solution(arr) {
    const target = arr.map((a) => {
        if(a >= 50 && a%2 === 0) return a/2
        if(a < 50 && a%2 === 1) return a*2 
        else return a
    });
    return target;
}