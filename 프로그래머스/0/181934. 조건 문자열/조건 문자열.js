function solution(ineq, eq, n, m) {
    // 조건은 4가지
    // 변수를 쪼개자.
    // 예외 상황을 생각해야 해
    let answer;
    if(eq === '=' && n === m) return 1;
    else if(ineq === ">" && eq === "!") answer = n>=m ? 1 : 0;
    else if(ineq === ">" && eq !== "!") answer = n>m ? 1 : 0;
    else if(ineq === "<" && eq === "!") answer = n<=m ? 1 : 0;
    else if(ineq === "<" && eq !== "!") answer = n<m ? 1 : 0;
    return answer;

}