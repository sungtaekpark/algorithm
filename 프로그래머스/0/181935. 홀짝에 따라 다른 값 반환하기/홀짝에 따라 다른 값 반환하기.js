function solution(n) {
    // 홀수, 짝수에 따라 계산 방식이 달라진다
    let arr = [];
    for(let i=1; i<=n; i++) arr.push(i);
    return n % 2 === 0 ? arr.filter((a) => a % 2 === 0).reduce((a,c) => a + c*c, 0) : arr.filter((a) => a % 2 === 1).reduce((a,c) => a + c); 
}