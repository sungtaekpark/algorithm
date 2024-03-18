function solution(my_string, s, e) {
    // var answer = '';
    // return answer;
    
    const start = my_string.slice(0,s);
    const target = my_string.substring(s,e+1).split('').reverse().join('')
    const end = my_string.slice(e+1);
    
    
    return String(start + target + end);
}