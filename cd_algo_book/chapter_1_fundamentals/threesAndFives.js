// Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console.

function ThreesFives() {
    let total = 0;
    for (let x = 100; x <= 4000000; x++) {
        if (x % 3 == 0 && x % 5 == 0) {
            total += 0;
        } else if (x % 3 == 0) {
            total += x;
        } else if (x % 5 == 0) {
            total += x;
        } else {
            total += 0;
        }
    }
    return total;
}

console.log(ThreesFives());