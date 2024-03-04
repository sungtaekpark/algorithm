function solution(a, b, c) {
    // 1. 모두 다른 경우
    // 2. 두숫자가 같은 경우
    // 3. 모두 같은 경우
    
    if(a !== b && a !== c && b !== c) return a + b + c;
    else if(a === b && b === c) return (a+b+c)*(a*a+b*b+c*c)*((a*a*a)+ (b*b*b) + (c*c*c))
    else return (a+b+c)*(a*a+b*b+c*c);
}