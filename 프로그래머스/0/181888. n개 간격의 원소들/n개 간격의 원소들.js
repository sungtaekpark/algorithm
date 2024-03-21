function solution(num_list, n) {
    return num_list.filter((a, index) => index % n === 0);
}