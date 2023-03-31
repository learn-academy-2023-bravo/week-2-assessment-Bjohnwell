// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Bravo 2023"
// console.log(cohort.split(""))

// a) Your answer: ["Bravo 2023"]
// b) Verify and explain: ['B', 'r', 'a', 'v','o', ' ', '2', '0','2', '3'] .split will break apart the the characters in a string and will return an arrary of the characters in the string. Where i missed is the ("") means the return will have "" between each letter in the new array. to recieve the results that I thought would return the syntax would have to be console.log(cohort.split()) 


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer:undefinded
// b) Verify and explain: (name) is not defined anywhere withing our function. It is essentially acting a place holder to make the function dynamic so we can pass in any variable that we have already defined. To have the result of "Hello, LEARN Student" we oule need to create the the variable const name = "LEARN Students" and pass that as an argument in the console.log

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [ 8, 10, 12, 14, 16 ]
// b) Verify and explain: it returned an array of all the numbers multiplied by 2 because we used .map to iterate over all the elements in the array applied the *2 to each element.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: this is using the .filter method to iterate of the numbers in the array and the essentially asking if the are NOT directly divisible by 2 by using the !== operator and returning all the numbers that if divided by 2 would leave a remaind making them NOT directly equal to 0

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:"Javascript"
// b) Verify and explain: it returned "Javascript" because in the console.log it is calling for what is in the zeroth index positon of the property "languages" by placing the 0 with in [] which represent an arrary and the 0 representing the zeroth index.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Bravo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: Learn { student: 'George', cohort: 'Bravo', year: 2023 }
// b) Verify and explain: 