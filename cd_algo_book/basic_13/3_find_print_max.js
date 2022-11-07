function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("The largest number is", max);
}

findMax([11, 22, 4, 17, 27, 6]);
findMax([8, 0, 15, 7, 23, 9]);