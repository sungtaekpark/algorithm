function solution(myString, pat) {
    const targetIndex = myString.lastIndexOf(pat);
    return myString.substring(0, targetIndex).concat(pat);
    
}