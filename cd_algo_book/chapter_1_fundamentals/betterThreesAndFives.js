// Change your function to make a ​BetterThreesFives(start,end)​where ​start​ and ​end values are customizable. You can think of the above ​ThreesFives()​ function as BetterThreesFives(100,4000000)​.

function BetterThreesFives(start, end) {
    let total = 0;
    for (let x = start; x <= end; x++) {
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

console.log(BetterThreesFives(100, 4000000));
console.log(BetterThreesFives(2, 5001));