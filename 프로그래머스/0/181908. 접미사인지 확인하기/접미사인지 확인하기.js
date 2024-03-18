function solution(my_string, is_suffix) {
    var answer = [];
    const length = my_string.length;
    
    for(let i=0; i< length; i++) {
        const target = my_string.slice(i);
        answer.push(target);
    }

    return answer.includes(is_suffix) ? 1 : 0;
}