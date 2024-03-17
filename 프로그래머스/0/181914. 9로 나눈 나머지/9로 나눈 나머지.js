function solution(number) {
    // 각 자리 숫자의 합;
    const sum = number.split("").reduce((a,c) => Number(a)+ Number(c), 0);
    return Number(sum)%9;
}