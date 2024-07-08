function solution(myStr) {
    const match = ["a","b","c"];
    const target = myStr.split("").map((string) => match.includes(string) === false ? string : "!").join("").split("!").filter((a) => a !== "");

    return target.length > 0 ? target : ["EMPTY"];
}