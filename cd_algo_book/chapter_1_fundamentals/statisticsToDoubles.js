// Implement a ‘die’ that randomly returns an integer between 1 and 6 inclusive. Roll a pair of these dice, tracking the statistics until doubles arerolled.Displaythe​numberofrolls​,​min,​ ​max,​ and ​average​.

function statisticsToDoubles() {
    let die1 = Math.floor((Math.random() * 6 ) + 1);
    let die2 = Math.floor((Math.random() * 6 ) + 1);
    let numOfRolls = 1;
    let total = 0;
    let min = die1 + die2;
    let max = die1 + die2;
    let average = total / numOfRolls;

    while (die1 !== die2) {
        numOfRolls ++;
        total += die1 + die2;
        if (die1 + die2 < min) {
            min = die1 + die2;
        }
        if (die1 + die2 > max) {
            max = die1 + die2;
        }
        console.log("Die 1:", die1, ". Die 2: ", die2);
        continue;
    }
    return "Number of Rolls: " + numOfRolls + ". Minimum total: " + min + ". Maximum total: " + max + ". Average: " + average + ".";
    // let die2 = Math.random();
    // roll1 = Math.floor(die1 * 6) + 1;
    // roll2 = Math.floor(die2 * 6) + 1;
}

console.log(statisticsToDoubles());