function solution(myString) {
    const target = myString.split('x');
    return target.map((str) => str.length);
}