const concat = function (arr1, arr2){
    let array = [];
    for (let a of arr1){
        array.push (a)
    }
    for (let b of arr2){
        array.push (b)
    }
    return array;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]));
console.log(concat([], [ 9, 7, 2 ]));
console.log(concat([ 5, 10 ], []));