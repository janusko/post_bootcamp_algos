// NUM. 1
var fruit1 = "apples";
var fruit2 = "oranges";
fruit2 = fruit1;

console.log(fruit2 + " and " + fruit1);
// "apples and apples"


// NUM. 2
var fruit1 = "apples";
var fruit2 = "oranges";
var temp = fruit1;
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);
// "apples and oranges"


// NUM. 3
var start = 0;
var end = 12;

while (start < end) {
    console.log("start: " + start + ", end: " + end);
    // start: 0, end: 12
    // start: 2, end: 10
    // start: 4, end: 8
    start += 2;
    end -= 2;
}


// NUM. 4 - Reverse an array
function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        let back = arr[arr.length - 1 -i];
        arr[i] = back;
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(reverseArray(["a", "b", "c", "d", "e"]));
console.log(reverseArray([1, 2, 3, 4, 5, 6]));