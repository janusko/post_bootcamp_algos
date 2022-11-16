// Given a numerical array, reverse the order of the values. The reversed array should have the same length, with existing elements moved to other indices so that the order of elements is reversed.

function reverseArray(arr) {
    if (arr.length == 0) {
        return undefined;
    }
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([27,5,19,89]));
console.log(reverseArray([]));