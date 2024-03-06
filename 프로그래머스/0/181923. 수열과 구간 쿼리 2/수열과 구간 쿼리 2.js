function solution(arr, queries) {
    // 단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
    
    
    return queries.map(([s, e, k]) => 
                       arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
                       
    
}