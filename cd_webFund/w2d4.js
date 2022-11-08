// Nesting Arrays - 
var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7]   ];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);

// Could we determine if a certain value was present? Returns true if the value is present and false otherwise
function isPresent(arr2d, value) {
    for (let i = 0; i <= arr2d.length - 1; i++) {
        for (let j = 0; j < arr2d[i].length - 1; j++) {
            if (arr2d[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

console.log(isPresent(arr2d, 7));
console.log(isPresent(arr2d, 10));