function solution(myString) {
    const target = myString.split("");
    const answer = target.map((item) => {
        // return item === "a" ? item.toUpperCase() : item.toLowerCase();
        if(item === "a") return item.toUpperCase();
        if(item === "A") return item;
        if(item !== "A") return item.toLowerCase();
    }).join("");
        
    
    return answer;
}