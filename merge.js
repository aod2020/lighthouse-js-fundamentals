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

function compareNumbers(a, b) {
    return a - b;
}

const merge = function (arr1, arr2){
    array = concat(arr1,arr2);
    result = array.sort(compareNumbers);
    return result;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]));
console.log(merge([], [ 9, 7, 2 ]));
console.log(merge([ 1, 2, 6 ], []));