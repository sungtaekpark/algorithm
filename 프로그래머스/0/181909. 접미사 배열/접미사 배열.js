function solution(my_string) {
    var answer = [];
    const length = my_string.length;
    
    for(let i=0; i< length; i++) {
        const target = my_string.slice(i);
        answer.push(target);
    }

    
    return answer.sort()
}