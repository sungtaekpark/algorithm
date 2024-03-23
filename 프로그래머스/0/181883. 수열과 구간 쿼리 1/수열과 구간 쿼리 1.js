function solution(arr, queries) {
    
    queries.map(([s,e]) => {
        for(i=s; i<=e; i++) {
            arr[i]++;
        }
    })
    return arr;
}