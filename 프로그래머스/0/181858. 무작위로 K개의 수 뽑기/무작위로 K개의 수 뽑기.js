function solution(arr, k) {
    var answer = [];
    const target = [...new Set(arr)];
    
    for(let i=0; i<k; i++) {
        target[i] >= 0? answer.push(target[i]) : answer.push(-1)
    }
    
    return answer;
}