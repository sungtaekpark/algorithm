function solution(arr, queries) {
        // i vs arr[i] 가 분명히 다르다는 것을 생각해라
        // 0,4,1 -> 0<=i<=4 => 0,1,2,3,4 => i%k = 0 ? arr[i] + 1 : arr[i]
        // => 0,1,2,3,4 => 1,2,3,5,4
        // 0,3,2 -> 0<=i<=3 => 0,1,2,3 => i%k = 0 ? arr[i]+1 : arr[i]
        // => 0, 2 => 2,2,4,5,4 
        // got it?
    
    for(let i=0; i<queries.length; i++) {
        const [s,e,k] = queries[i];
        for(let j=s; j<=e; j++) {
            j%k === 0 ? arr[j] = arr[j] + 1 : arr[j];
        }
    }
    return arr;
}