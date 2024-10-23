function solution(arr) {
    // var answer = [];
    // return answer;
    
    // arr의 길이가 2의 정수 거듭제곱이 되도록
    // arr.length === (2*n)*(2*n)
    // 2
    let length = arr.length;
    let i = 1;
    
    while (i < length) {
        i *= 2;
    }
    
    while (arr.length < i) {
        arr.push(0);
    }
    
    return arr;
}