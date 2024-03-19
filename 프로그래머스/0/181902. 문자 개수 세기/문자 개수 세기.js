function solution(my_string) {
    const result = [];
    // Uppercase letters 'A' to 'Z'
    for (let i = 65; i <= 90; i++) {
        const count = my_string.split(String.fromCharCode(i)).length - 1;
        result.push(count);
    }
    // Lowercase letters 'a' to 'z'
    for (let i = 97; i <= 122; i++) {
        const count = my_string.split(String.fromCharCode(i)).length - 1;
        result.push(count);
    }
    
    return result;
}