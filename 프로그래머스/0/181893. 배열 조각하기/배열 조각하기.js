function solution(arr, query) {
    
 query.map((a, index) => index%2 === 0 ? arr.splice(a+1, arr.length-(a+1)) : 
                                arr.splice(0, a));

    return arr;
}