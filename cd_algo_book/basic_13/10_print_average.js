function printAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(printAverage([27, 5, 89, 0]));
console.log(printAverage([3, 7, 8, 11, 4, 2, 6]));