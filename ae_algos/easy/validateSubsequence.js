// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessaryily adjacent in the arrat, but that are in teh same order as they appear in teh array. For instance, the numbers [1, 3, 4] form a subsuqence of the array [1, 2, 3, 4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subseqences of the array.

function isValidSubsequence(array, sequence) {
    if (array.length == 0) {
        return false;
    }
    let newArray = [];
    let x = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === sequence[x]) {
            newArray.push(array[i]);
            x++;
        }
    }
    console.log("newArray: ", newArray, ". sequence: ", sequence);
    if (JSON.stringify(newArray) == JSON.stringify(sequence)) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));