function solution(arr) {
    let count = 0;
    let target = arr;
    while(true) {
        const changedArr = target.map(a => {
            if(a >= 50 && a%2 === 0) return a/2;
            if(a < 50 && a%2 === 1) return a*2+1;
            return a;
        })
        const isAllSame = target.every((a, i) => a === changedArr[i]);
        if(isAllSame) break
        count+=1;
        
        target = changedArr;
    }
    
    return count;
}
    
    