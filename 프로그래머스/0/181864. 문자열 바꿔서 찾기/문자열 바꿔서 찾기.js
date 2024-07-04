function solution(myString, pat) {
    const target = myString.split("").map((str) => str === "A" ? "B" : "A");
    return target.join("").includes(pat) ? 1 : 0;
}