function solution(x1, x2, x3, x4) {
    // 진리표
    // 계산은 2개
    // V
    const predict1 = (x,y) => {
       return x === true && y === true ? true 
        : x === true && y === false ? true
        : x === false && y === true ? true
        : false
    };
    const predict2 = (x,y) => {
       return x === true && y === true ? true 
        : x === true && y === false ? false
        : x === false && y === true ? false
        : false
    };
    
    return predict2(predict1(x1, x2), predict1(x3,x4));
    
}