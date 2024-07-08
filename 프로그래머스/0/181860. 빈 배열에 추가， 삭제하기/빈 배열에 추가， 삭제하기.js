function solution(arr, flag) {
    var answer = [];
    
    flag.map((f, index) => {
        const target = new Array(arr[index]*2).fill(arr[index]);
        f ? answer = answer.concat(target) :     answer = answer.slice(0, -arr[index])
    })
    
    return answer;
}