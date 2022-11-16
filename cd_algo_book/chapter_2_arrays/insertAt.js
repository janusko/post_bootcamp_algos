// Given an array, index, and additional value, ​insert the value into the array a​t the given index. Do this without using built-in array methods. You can think of ​PushFront(arr,val)​ as equivalent to InsertAt(arr,0,val)​.

function insertAt(arr, idx, val) {
    if (arr.length == 0) {
        arr[idx] = val;
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i == idx) {
                arr[i] = val;
            }
        }
    }
    return arr;
}

console.log(insertAt([1, 2, 3, 5], 3, 4));
console.log(insertAt([27, 5, 19, 89, 0], 2, 7));
console.log(insertAt([], 0, 1));