// PREDICT
var a = 25;
a = a - 13;
console.log(a / 2);
// 6

a = "hello";
console.log(a + " hello");
// "hello hello"


for (var i = 0; i < 10; i++) {
    console.log(i);
    // 0, 4, 8
    i = i + 3;
}
console.log("outside of the loop " + i);
// "outside the loop 12"


function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
        // "the current sum is 2"
        // "the current sum is 5"
        // "the current sum is 10" 
    }
    console.log("the total is: " + sum);
    // "the total is 10"
}
getTotal([1, 3, 5]);


