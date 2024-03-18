function solution(intStrs, k, s, l) {
    const target = intStrs.map((a) => Number(a.substr(s, l))).filter((n) => n > k);
    return target;
}