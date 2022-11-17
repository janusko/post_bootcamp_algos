// Write a function that takes in a non-empty array of distrinct intergers and an integer representing a target sum. If any two number in the input array sum up to the target sum, the function should return them in an array, in any order. If no two sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you cannot add a single integer to itself in order to obtain the target sum.

// You can assume that there will be at most one pair of numbers summing up to the target sum.

function twoNumberSum(array, targetSum) {
    if (array.length == 0) {
        return []
    }
    for (let i = 0; i < array.length; i++) {
        for (let x = 0; x < array.length; x++) {
            if (x !== i) {
                if (array[i] + array[x] == targetSum) {
                    return [array[i], array[x]];
                }
            }
        }
    }
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))