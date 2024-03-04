function solution(code) {
    
    let mode = 0;
    let ret = "";
    
    for(let idx=0; idx<=code.length-1; idx++) {
        if(mode===0) {
            code[idx] === "1" ? mode = 1 : idx%2 === 0 &&( ret += code[idx]  )  
        }
        else{
                    code[idx] === "1" ? mode = 0 : idx%2 === 1 && (ret += code[idx])
        }
    };

    
    return ret === "" ? "EMPTY" : ret;
}