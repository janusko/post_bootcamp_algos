function greater_than_y (arr, Y) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            console.log(arr[i]);
            count++;
        }
    }
    return count;
}
greater_than_y([20, 1, 9, 14, 27, 3], 7);
greater_than_y([10, 3, 15, 2, 8, 11], 10);
