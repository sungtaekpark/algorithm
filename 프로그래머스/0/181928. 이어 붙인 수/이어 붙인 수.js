function solution(num_list) {
    const even_sum = num_list.reduce((acc,curr) => curr%2 === 1 ? acc += curr : acc, "")
    const odd_sum = num_list.reduce((acc,curr) => curr%2 === 0 ? acc += curr : acc, "")
    
    return Number(even_sum) + Number(odd_sum);
}