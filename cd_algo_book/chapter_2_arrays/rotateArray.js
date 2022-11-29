// Implement ​rotateArr(arr, shiftBy)​ that accepts array and offset. Shift arr’s values ​to the right​ by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1)​, change the array to [​3,1,2]​.

function rotateArray(arr, shiftBy) {
    if (arr.length == 0) {
        return undefined;
    }
    if (shiftBy === 0) {
        return arr;
    }

    for (let i = 0; i < shiftBy; i++) {
        arr.unshift(arr.pop());
        // unshift() adds one or more elements to the beginning of the array
            // the popped element is added to the front using unshift()
    }
}

console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([27, 5, 19, 89], 2));
console.log(rotateArray([27, 5, 19, 89], 3));
console.log(rotateArray([]));