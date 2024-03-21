function solution(arr) {
    const target = [];
    arr.map((a, index) => {
        a === 2 && target.push(index);
    })

    return target.length > 2 ? arr.slice(target[0], target[target.length-1]+1)
    : target.length === 2 ? arr.slice(target[0], target[1]+1)
    : target.length === 1 ? [arr[target[0]]]
    : [-1];
}