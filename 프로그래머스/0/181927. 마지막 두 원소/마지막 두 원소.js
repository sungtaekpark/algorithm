function solution(num_list) {
    const length = num_list.length;
    const last = num_list[length-1];
    const after = num_list[length-2]
    const targetArr = [...num_list]
    
    console.log(last - after)
    
    return last > after ? [...targetArr, last-after] : [...targetArr, last*2]
}