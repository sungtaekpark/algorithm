function solution(arr1, arr2) {
    // var answer = 0;
    // return answer;
    const length1 = arr1.length;
    const length2 = arr2.length;
    
    // 같은 경우
    if(length1 !== length2) return length1 > length2 ? 1 : -1;
     
    const sum1 = arr1.reduce((a, b) => (a+b));
    const sum2 = arr2.reduce((a, b) => (a+b));
    
    return sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0;
}