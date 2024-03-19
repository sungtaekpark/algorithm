function solution(arr, idx) {
    const answer = [];
    arr.map((a, index) => {
        console.log(a)
        if(index >= idx && a === 1) answer.push(index);
    })
    
    return answer.length > 0 ? answer[0] : -1;
}