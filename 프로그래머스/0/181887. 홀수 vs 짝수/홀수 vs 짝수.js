function solution(num_list) {
    let fake_even_sum = num_list.filter((_, i) => i%2 === 1).reduce((a,c) => a + c, 0);
    let fake_odd_sum = num_list.filter((_, i) => i%2 === 0).reduce((a,c) => a + c, 0);

    return fake_even_sum > fake_odd_sum ? fake_even_sum : fake_odd_sum;
}