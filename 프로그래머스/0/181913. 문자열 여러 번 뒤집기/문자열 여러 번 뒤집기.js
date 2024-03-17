function solution(my_string, queries) {
    queries.map((a) => {
        const target = [...my_string];
        const reverseTarget = target.slice(a[0],a[1]+1).reverse().join("");
        target.splice(a[0],a[1]-a[0]+1, reverseTarget);
        my_string = target.join("");
    });
    return my_string;   
}