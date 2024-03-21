function solution(arr, intervals) {
    var answer = [];
    
    intervals.forEach(([s,e]) => answer.push(...arr.slice(s,e+1)));
    return answer;
}