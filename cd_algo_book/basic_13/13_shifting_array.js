function shiftDown(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i + 1]) {
            arr[i - 1] = arr[i];
        } else {
            arr[i - 1] = arr[i];
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(shiftDown([2, 6, -1, 7, 11, 4]));