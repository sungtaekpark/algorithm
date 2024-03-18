function solution(my_string, is_prefix) {
    var answer = [];
    const length = my_string.length;
    
    for(let i=0; i<= length; i++) {
        const target = my_string.slice(0, i);
        answer.push(target);
    }
    
    return answer.includes(is_prefix) ? 1: 0;
}