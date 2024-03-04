function solution(a, d, included) {
    var answer = 0;
    
    const target = included.map((b, idx) => b === true ? a + d*(idx) : answer);
    return target.reduce((a,c) => a+c, 0) 
}