// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// RED
describe("aThird", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        expect(aThird(object1)).toEqual("15 is divisible by three")
        expect(aThird(object2)).toEqual("0 is divisible by three")
        expect(aThird(object3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: aThird is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.179 s
// Ran all test suites.
// error Command failed with exit code 1.

// PSEUDOCODE
// Input: provided objects "object1, object2, object3"
// Output: a string that says the given object is or is not divisible by 3
// Create a function called aThird that takes in 1 argument 
// use the modulo(%) math operator to check if the object is divisible by 3
// use an equality statement to check if the result is true 
// if the statement is true then return true  

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// GREEN 

const aThird = (value) => {
    if(value.number % 3 !== 0){
        return `${value.number} is not divisible by three`
    } else {
        return `${value.number} is divisible by three`
    }
}

// REFACTOR 

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// RED 
describe("capitalNouns", () => {
    it("takes in an array of words and returns an array with all the words capitalized.", () => {
        expect(capitalNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// ReferenceError: capitalNouns is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.15 s, estimated 1 s


// b) Create the function that makes the test pass.


// GREEN
// PSEUDOCODE:
// Input: An array of words ie: ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Output: Any array of words with all words capitalized ie: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

// create a function called capitalNouns that takes 1 argument as an array 
// iterate over all the index of each elements in the array using .length
// use charAt to identify the first letter of each word
// use toUpperCase to capitalize the first letter of each word
// use slice to seprate the rest of the words from the first letter 
// return an array of words with capital letters

const capitalNouns = (array) => {
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } 
    return array
  }

//   REFACTOR:



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// RED 
describe("onlyVowels", () => {
    it("that takes in a string and logs the index of the first vowel.", () => {
        expect(onlyVowels(vowelTester1)).toEqual(1)
        expect(onlyVowels(vowelTester2)).toEqual(0)
        expect(onlyVowels(vowelTester3)).toEqual(2)
    })
})
// ReferenceError: onlyVowels is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.173 s, estimated 1 s

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// GREEN 
// PSEUDOCODE
// create a function called onlyVowels that takes in an of a string.
// creat a variable to hold the letters that are vowels.
// iterate over the string using a comaparitive statement comparing the given string to the variable holding the vowels
// use .includes to indentify the the vowels index position
// return the index of the 1st vowel 

const onlyVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i
        }
    }
return -1
}

//   REFACTOR 

  
  