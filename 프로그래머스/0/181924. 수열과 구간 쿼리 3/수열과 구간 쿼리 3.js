function solution(arr, queries) {
    let targetArr = [...arr];
    const changer = (arr, a, b) => {
        const target = [...arr];
        target[a] = arr[b];
        target[b] = arr[a];
        return targetArr = target;
    }
    queries.map((q) => changer(targetArr, q[0],q[1]));
    
    return targetArr;
}