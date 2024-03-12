
    
const determiner = (number) => {
    const str = String(number);
    for (let j = 0; j < str.length; j++) {
        if (str[j] !== '5' && str[j] !== '0') {
            return false;
        }
    }
    return true;
}

function solution(l, r) {

    let arr = [];
    
    for(let i=l; i<=r; i++) {
        
        if(determiner(i)) {
            arr.push(i);
        }
    }
    
    return arr.length !== 0 ? arr : [-1];
}