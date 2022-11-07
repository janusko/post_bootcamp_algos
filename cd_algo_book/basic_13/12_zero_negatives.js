function zeroOutNegatives(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(zeroOutNegatives([4, 9, -3, 2, -9]));