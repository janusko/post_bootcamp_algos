// Given an array, ​remove and return the value ​at the beginning of the array. Do this without using any built-in array methods except ​pop()​.

function popFront(arr) {
    let popped = arr[0];
    if (arr.length == 0) {
        return undefined;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] == null) {
                arr.pop();
            } else {
                arr[i] = arr[i + 1];
            }
        }
    }
    console.log(arr);
    return popped;
}

console.log(popFront([1,2,3,4]));
console.log(popFront([27,5,89]));
console.log(popFront([]));