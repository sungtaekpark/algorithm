function solution(myString) {
    const target = myString.split("x").filter((a) => a.length > 0);
    return target.sort();
}