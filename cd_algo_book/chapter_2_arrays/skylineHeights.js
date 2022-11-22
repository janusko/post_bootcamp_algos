// You are given an array with heights of consecutive buildings in the city. For example, ​[-1,7,3]​ would represent three buildings: first is actually below street level, second is seven stories high, and third is three stories high (but hidden behind the seven-story one). You are situated at street level. Return an array containing heights of the buildings you can see, in order. Given ​[1,-1,7,3]​ return ​[1,7]​.

function skylineHeights(array) {
    if (array.length == 0) {
        return undefined;
    }
    const sightline = [];
    let highest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (sightline.length == 0) {
            sightline.push(array[i]);
            highest = array[i];
        } else if (array[i] > highest) {
            sightline.push(array[i]);
            highest = array[i];
        }
    }
    return sightline;
}

console.log(skylineHeights([1, 2, 3, 4, 5]));
console.log(skylineHeights([27, 5, 89, 19]));
console.log(skylineHeights([]));
console.log(skylineHeights([1, -1, 7, 3]));