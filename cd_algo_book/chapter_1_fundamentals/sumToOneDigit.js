// Implement a function ​sumToOne(num)​ that, given a number, sums that number’s digits repeatedly until the sum is only one digit. Return thatfinalonedigitresult.

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) {
    if (num < 10) {
        return num;
    } else {
        let arr = [];
        while (num) {
            arr.push(num % 10);
            num = Math.floor(num / 10);
        }
        console.log(arr);
        num = 0;
        for (let i = 0; i < arr.length; i++) {
            num += arr[i];
        }
    }
    return sumToOne(num);
}

console.log(sumToOne(724));
console.log(sumToOne(90314));
console.log(sumToOne(27));
console.log(sumToOne(0));