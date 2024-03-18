function solution(q, r, code) {
    const answer = [];
    const target = [...code];
    target.map((a, index) => index%q === r && answer.push(a));
    return answer.join("");
}