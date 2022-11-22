// Implement a function ​removeNegatives()​ that accepts an array and removes any values that are less than zero.

function removeNegatives(arr) {
    if (arr.length == 0) {
        return undefined;
    }
    let leftPointer = 0; 
    for (let i = arr.length - 1; i >= 0; i--) {
        let rightPointer = arr.length - 1;
        if (arr[rightPointer] < 0) {
            arr.pop();
        } else if (arr[leftPointer] < 0) {
            let temp = arr[rightPointer];
            arr[rightPointer] = arr[leftPointer];
            arr[leftPointer] = temp;
            arr.pop();
        }
        leftPointer++;
    }
    return arr;
}

console.log(removeNegatives([1,-2,-3,-4,5,6]));
console.log(removeNegatives([27,-5,19,-89]));
console.log(removeNegatives([]));