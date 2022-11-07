function square(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * arr[i]);
    }
    return newArr;
}

console.log(square([5, 3, 9, 11]));
console.log(square([27, 8, 10, 17, 2]));