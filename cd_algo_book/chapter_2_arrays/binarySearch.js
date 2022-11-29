// Given a sorted array and a value, return whether that value is present in the array. Do not sequentially iterate the entire array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.

function binarySearch(array, value) {
    if (array.length === 0) {
        return undefined
    }
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        
        if (value === array[middle]) {
            return true;
        }

        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return false;
}

console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10], 7));
console.log(binarySearch([0,5,19,27,89], 27));
console.log(binarySearch([], 1));
console.log(binarySearch([5,8,10,14,15], ));
console.log(binarySearch([5,8,10,14,15], 17));