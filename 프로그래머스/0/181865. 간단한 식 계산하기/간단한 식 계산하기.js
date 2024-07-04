// eval은 위험하냐..?
function solution(binomial) {
    const target = binomial.split(" ");
    return eval(`${target[0]} ${target[1]} ${target[2]}`);
}