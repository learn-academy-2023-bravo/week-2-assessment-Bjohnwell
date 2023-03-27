# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is essentially a place holder or name that you will be checking in your function. An argument is the actual value of the data you are passing into your function in:
const object1 = { number: 15 } 
const aThird = (value) => {
    if(value.number % 3 !== 0){
        return `${value.number} is not divisible by three`
    } else {
        return `${value.number} is divisible by three`
    }
}
the parameter I am using is (value) this has not(for lack of a better word actual value) it is standing in for what i will eventually call when i console.log the function. When I do, do that my argument will not be (value) but it will be (object1). as we defined what object1 actually is worth datawise.

Researched answer: https://developer.mozilla.org/en-US/docs/Glossary/Parameter
(language from the source)
"Note the difference between parameters and arguments:

Function parameters are the names listed in the function's definition.
Function arguments are the real values passed to the function.
Parameters are initialized to the values of the arguments supplied."

(My interptation)
Function parameters are just the names you place in your function when you are defining it. The don't mean anything and can be named anything as long as you are consistent throughout your function.

Function arguments are the value of the data that you are passing when callng your function.

Parameters are linked to the function arguments in that they must be the same data type.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map() takes the predefined paramters value, index, and array. but value is the only one tht is required.

Researched answer: https://www.w3schools.com/jsref/jsref_map.asp

(language from the source:)
function()	Required. A function to be run for each array element.
currentValue	Required. The value of the current element.
index	Optional. The index of the current element.
arr	Optional. The array of the current element.
thisValue	Optional. Default value undefined. A value passed to the function to be used as its this value.

(My interpretation)
Value is the only required predefined parameter.

3. What is the difference between map and filter?

Your answer: map will return the entire array of the same size after applying a specific condition to it. filter will return a subset of the array.

Researched answer: https://thinkster.io/tutorials/100-front-end-interview-questions-challenge/map-vs-filter-vs-reduce

(language from the source)

Map: returns an array of pieces of information from the original array. In the callback function, return the data you wish to be part of the new array.

Filter: returns a subset of the original array based on custom criteria. In your callback function, return a boolean value to determine whether or not each item will be included in the new array.

1. What is iteration?

Your answer: The process of doing an action or process over and over till a condition is met.

Researched answer:https://www.techopedia.com/definition/3821/iteration 

(Language from the source)
Iteration, in the context of computer programming, is a process wherein a set of instructions or structures are repeated in a sequence a specified number of times or until a condition is met. 

1. What is the difference between a function and a method?

Your answer: a function is a block of code that preforms a particular task. a method are actions that can be preformed on objects.

Researched answer: https://www.w3schools.com/js/js_object_methods.asp#:~:text=JavaScript%20methods%20are%20actions%20that,property%20containing%20a%20function%20definition.

(Language from the source)

A JavaScript method is a property containing a function definition.

A JavaScript function is a block of code designed to perform a particular task.

(My interpretation)

A function is code designed to complete a task. A method are functions that can be used on objects.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
(language from the source)
JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: is an independent and resuable bit of code. Seems akin to a variable

2. Spread operator: Allows to copy all or part of and array or object. Seems to be similiar to usinc .map() or .filter()

3. React state: The state object is where you store property values that belongs to the component

4. React props: Props are arguments passed into React components

5. DOM events: HTML DOM allows JavaScript to react to HTML events
