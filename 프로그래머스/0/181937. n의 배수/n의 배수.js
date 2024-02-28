function solution(num, n) {
    // 배수이면? 나눴을 때 배수라면 0일 것이고 아니면 0이 아니겠지?
    const target = num % n;
    return target === 0 ? 1 : 0;
}