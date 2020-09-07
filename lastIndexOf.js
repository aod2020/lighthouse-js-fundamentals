const lastIndexOf = function (arr, val){
    let counter = [];
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
            counter.push(i);
        }
        console.log(counter)
    }
    if (counter.length == 0){
        result = -1;
    }
    else{
        result =  counter[counter.length-1]
    }
    
    return result;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ],20));