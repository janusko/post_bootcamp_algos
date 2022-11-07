function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        sum += arr[i];
    }
    let avg = sum / arr.length;
    console.log("Max is", max, ". Min is ", min, ". The average is ", avg);
    return max, min, avg;
}

maxMinAvg([1, 5, 11, 4, 12, 10]);
maxMinAvg([7, 27, 6, 3]);
maxMinAvg([11, 18, 5, 10, 1, 0, 23, 4]);