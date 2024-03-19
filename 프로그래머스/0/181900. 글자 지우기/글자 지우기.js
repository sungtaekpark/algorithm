function solution(my_string, indices) {
    const answer = [];
    const target = [...my_string];
    target.map((a, index) => indices.includes(index) === false && answer.push(a));
    return answer.join("");
}