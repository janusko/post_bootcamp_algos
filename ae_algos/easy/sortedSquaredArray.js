// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order

function sortedSquaredArray(array) {
    if (array.length == 0) {
        return undefined;
    }
    let newArray = [];
    let leftPointer = 0;
    let rightPointer = array.length - 1;
    for (let i = array.length - 1; i >= 0; i--) {
        let leftSquared = array[leftPointer] ** 2;
        let rightSquared = array[rightPointer] ** 2;
        
        if (leftSquared > rightSquared) {
            newArray[i] = leftSquared;
            leftPointer ++;
        } else {
            newArray[i] = rightSquared;
            rightPointer --;
        }
    }
    return newArray;
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]))