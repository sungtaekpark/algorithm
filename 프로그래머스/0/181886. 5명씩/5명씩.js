function solution(names) {
    const splitArray = (arr, chunkSize) => {
        var result = [];
        for (var i = 0; i < arr.length; i += chunkSize) {
            result.push(arr.slice(i, i + chunkSize));
        }
        return result;
    }
    const arr = splitArray(names, 5);
    const answer = [];
    arr.map(([a, b]) => answer.push(a));
    
    return answer;
}