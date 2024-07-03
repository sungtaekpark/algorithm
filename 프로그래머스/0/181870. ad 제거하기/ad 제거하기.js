function solution(strArr) {
    const arr = [];
    strArr.map((str) => {
        const targetIndex = str.indexOf("ad");
        if(targetIndex === -1) arr.push(str);
    })
    return arr;
}