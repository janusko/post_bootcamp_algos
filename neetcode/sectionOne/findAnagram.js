// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = function(s, t) {
    let obj = {};

    for(let char of s) {
        if (!(obj[char])) {
            obj[char] = 0;
        }
        obj[char]++;
    }

    for(let char of t) {
        if (obj[char] === undefined){
            return false;
        } else {
            obj[char]--;
        }
    } 

    for(let char in obj) {
        if (obj[char] !== 0) {
            return false
        }
    }

    return true;
}

console.log(isAnagram("car", "rat"));
console.log(isAnagram("brick", "rent"));
console.log(isAnagram("gramana", "anagram"));
console.log(isAnagram("steam", "teams"));