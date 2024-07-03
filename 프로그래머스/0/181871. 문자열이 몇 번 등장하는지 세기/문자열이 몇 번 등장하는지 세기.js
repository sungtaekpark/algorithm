function solution(myString, pat) {
    let target = 0;
    const patLength = pat.length;
    for(let i=0; i<= myString.length; i++) {
        const targetString = myString.substring(i);
        if(targetString.substring(0, patLength) === pat) target++; 
    }
    return target;
}