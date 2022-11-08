// Predict what each of the following will return. Can we predict the variable random?
var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();

console.log(floor);
// 1
console.log(ceiling);
// 4
console.log(random);


// Using what we've learned about the Math library in JavaScript, complete the following function that should return a value between 1 through 6 at random. 
function d6() {
    var roll = Math.random();
    roll = Math.floor(roll * 10);
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Using the following array, write a function that will answer all of our questions by randomly choosing a response
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function magicEightBall() {
    let randomRoll = Math.floor(Math.random(lifesAnswers.length) * 10);
    return lifesAnswers[randomRoll];
}

console.log(magicEightBall());