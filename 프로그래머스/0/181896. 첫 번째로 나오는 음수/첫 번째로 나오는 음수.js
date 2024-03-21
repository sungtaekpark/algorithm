function solution(num_list) {
    const target = [];
    num_list.map((a,i) => a <= 0 && target.push(i));
    return target.length > 0 ? target[0] : -1;
}