var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// How to access the name?
console.log(monster.name);
// How to access the 2nd type?
console.log(monster.types[1]);


// Array of objects
var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

for(var i=0; i<pokemon.length; i++) {
    if(pokemon[i].id > 99) {
        console.log("Id greater than 99: ", pokemon[i].name);
    }
}

// How to access the pokémon objects whose id is evenly divisible by 3?
for(let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id % 3 == 0) {
        console.log("Divisible by three: ", pokemon[i].name);
    }
}

// How to access the pokémon objects that have more than one type?
for(let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.length > 1) {
        console.log("More than one type: ", pokemon[i].name, " types: ", pokemon[i].types);
    }
}

// How to access the names of the pokémon whose only type is "poison"?
for(let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types.includes("poison")) {
        console.log("Has type poison: ", pokemon[i].name);
    }
}

// How to access the first type of all the pokémon whose second type is "flying"?
for(let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types[1] == "flying") {
        console.log("Second type is flying: ", pokemon[i].name, ". Their first type is: ", pokemon[i].types[0]);
    }
}

// How to access the reverse of the names of the pokémon whose only type is "poison"?
for(let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].types == "poison") {
        reversedName = pokemon[i].name.split("").reverse().join("");
        console.log("Only type is poison: ", pokemon[i].name, ". Their name reversed is: ", reversedName);
    }
}