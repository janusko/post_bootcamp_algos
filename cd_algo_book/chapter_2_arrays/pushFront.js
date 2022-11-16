// Given an array and an additional value, ​insert this value ​at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, newNum) {
    for (let i = arr.length; i > 0; i--) {
            arr[i] = arr[i - 1];
    }
    arr[0] = newNum;
    return arr;
}

console.log(pushFront([2,3,4,5], 1));
console.log(pushFront([27,5,89], 0));