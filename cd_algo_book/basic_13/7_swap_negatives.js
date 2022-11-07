function swapNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 ) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

console.log(swapNegatives([2, 7, 5, 11, 20, 3, 6, 4]));
console.log(swapNegatives([12, 18, 17, 4, 5, 6]));