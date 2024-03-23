function solution(todo_list, finished) {
    const result = [];
    finished.map((a,i) => a === false && result.push(todo_list[i]));
    
    return result;
}