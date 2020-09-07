
const range = function (start, end,step){
    let result = [];
    if (start === NaN || end === NaN || step === NaN || start > end || step <= 0){
        result = [];
    }
    else{
        let i = start
        while (i <= end){
           result.push(i);
           i = i + step;
        }
    }
    return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));