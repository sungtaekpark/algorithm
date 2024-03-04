function solution(n, control) {
    return control.split("").reduce((acc, curr) => 
                                    curr === "w" ? acc +1 
                                    : curr === "s" ? acc -1 
                                    : curr === "d" ? acc + 10
                                    : curr === "a" ? acc - 10 
                                    : acc, n
                                   )
}