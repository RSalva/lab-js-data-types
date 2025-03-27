/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;

// Print out the concatenated string
console.log(tongueTwister);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let concatenatedParts = part1.charAt(0) + part1.charAt(1) + part1.charAt(2) + part1.charAt(3).toUpperCase() + part2.charAt(0) + part2.charAt(1) + part2.charAt(2) + part2.charAt(3) + part2.charAt(4) + part2.charAt(5).toUpperCase();

// Print the cameLtaiL-formatted string
console.log(concatenatedParts);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
let tipAmount = 84 * 15 / 100;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(10);
let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;         // false

const expression2 = a || b;         //true

const expression3 = !a && b;        //false

const expression4 = !(a && b);      //true

const expression5 = !a || !b;       //true

const expression6 = !(a || b);      //false

const expression7 = a && a;         //true


console.log(`La expresion 1 es : ${expression1}`);
console.log(`La expresion 2 es : ${expression2}`);
console.log(`La expresion 3 es : ${expression3}`);
console.log(`La expresion 4 es : ${expression4}`);
console.log(`La expresion 5 es : ${expression5}`);
console.log(`La expresion 6 es : ${expression6}`);
console.log(`La expresion 7 es : ${expression7}`);
