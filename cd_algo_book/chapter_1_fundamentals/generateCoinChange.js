// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.

function generateCoinChange(cents) {
    let penny = 0;
    let nickel = 0;
    let dime = 0;
    let quarter = 0;
    while (cents >= 0) {
        if (cents >= 25) {
            quarter ++;
            cents -= 25;
        } else if (cents >= 10) {
            dime ++;
            cents -= 10;
        } else if (cents >= 5) {
            nickel ++;
            cents -= 5;
        } else if (cents >= 1) {
            penny++;
            cents -= 1;
        } else {
            break;
        }
    }
    let result = "Quarters: " + quarter + ". Dimes: " + dime + ". Nickels: " + nickel + ". Pennies: " + penny + "."
    return result;
}

console.log(generateCoinChange(95));
console.log(generateCoinChange(73));
console.log(generateCoinChange(27));
console.log(generateCoinChange(0));