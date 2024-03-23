function solution(numbers, n) {
    const target = numbers.reduce((a,c) => a <= n ? a + c : a, 0);
    return target;
}