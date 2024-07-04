function solution(rny_string) {
    const target = rny_string.split("");
    return target.map((str) => str === "m" ? "rn": str).join("");
}