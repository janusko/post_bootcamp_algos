// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicates(array) {
    if (array === null || array.length === 0) {
        return false;
    }
    
    return (new Set(array).size !== array.length);
    // Set can only store unique value, therefore if it is less than array.length than there must be a duplicate.
}

console.log(containsDuplicates([1, 2, 3, 4, 5, 3]));
console.log(containsDuplicates([27, 5, 19, 89]));
console.log(containsDuplicates([], 3));