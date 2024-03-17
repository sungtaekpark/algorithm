function solution(a, b, c, d) {
    // 객체로 분류!
    const dices = [a, b, c, d]
    const freq = dices.reduce((acc, cur) => {
        acc[cur] = acc[cur] ?? 0; // nullish!
        acc[cur]++;
        return acc;
    }, {})
    
    // 카운트
    const values = Object.values(freq);
    const keys = Object.keys(freq);
    console.log(values, keys)
    const count = Math.max(...Object.values(freq));
    
    if(count===4) {
        return 1111 * Number(keys[0]);
    }
    if(count===3) {
        const p = keys.find((a) => freq[a] === 3);
        const q = keys.find((a) => freq[a] === 1);
        return (10*Number(p)+Number(q))*(10*Number(p)+Number(q));
    }
    if(count === 2 && values.length === 2) {
       return (Number(keys[0]) + Number(keys[1])) * (Math.abs(Number(keys[0]) -         Number(keys[1]))) 
    }
    if(count === 2 && values.length > 2) {
        return keys.reduce((acc, cur) => freq[cur] === 1 ? acc*cur : acc, 1);
    }
    return Math.min(a,b,c,d);
}