function solution(strArr) {
    const answer = [];
    
    strArr.map((item, index) => {
      return index % 2 === 0 ? answer.push(item.toLowerCase()) : answer.push(item.toUpperCase());
    })
    
    return answer;
}