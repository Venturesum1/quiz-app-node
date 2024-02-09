const quizData = {
  title: "Quize app Application"
};

const questions = [
  {
    text: "Which of the following is NOT a JavaScript framework?",
    type: "mc",
    answers: [
      { text: "React", correct: false },
      { text: "Angular", correct: false },
      { text: "Vue", correct: false },
      { text: "Bootstrap", correct: true }
    ]
  },
  {
    text: "What does DOM stand for?",
    type: "mc",
    answers: [
      { text: "Document Object Model", correct: true },
      { text: "Data Object Model", correct: false },
      { text: "Dynamic Object Model", correct: false },
      { text: "Document Oriented Model", correct: false }
    ]
  },

  {
    text: "What does the '=== operator do in JavaScript?",
    type: "mc",
    answers: [
      { text: "Checks for equality without type conversion", correct: true },
      { text: "Checks for equality with type conversion", correct: false },
      { text: "Assigns a value to a variable", correct: false },
      { text: "Compares two values and returns true if they are different", correct: false }
    ]
  },
  {
    text: "Which method is used to remove the last element from an array in JavaScript?",
    type: "mc",
    answers: [
      { text: "pop()", correct: true },
      { text: "push()", correct: false },
      { text: "shift()", correct: false },
      { text: "splice()", correct: false }
    ]
  },
  {
    text: "What is the result of 10 + '10' in JavaScript?",
    type: "mc",
    answers: [
      { text: "'1010'", correct: true },
      { text: "20", correct: false },
      { text: "1010", correct: false },
      { text: "Error", correct: false }
    ]
  },
  {
    text: "Which method is used to schedule a function to run after a certain delay in JavaScript?",
    type: "mc",
    answers: [
      { text: "setTimeout()", correct: true },
      { text: "setInterval()", correct: false },
      { text: "setDelay()", correct: false },
      { text: "delay()", correct: false }
    ]
  },
  {
    text: "What does JSON stand for?",
    type: "mc",
    answers: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Oriented Notation", correct: false },
      { text: "JavaScript Object Naming", correct: false },
      { text: "JavaScript Objective Notation", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'use strict' directive in JavaScript?",
    type: "mc",
    answers: [
      { text: "Enforces stricter parsing and error handling in code", correct: true },
      { text: "Defines a strict mode for execution", correct: false },
      { text: "Ensures compatibility with older browsers", correct: false },
      { text: "Declares strict equality for comparison", correct: false }
    ]
  },
  {
    text: "Which operator is used for exponentiation in JavaScript?",
    type: "mc",
    answers: [
      { text: "**", correct: true },
      { text: "^", correct: false },
      { text: "*", correct: false },
      { text: "//", correct: false }
    ]
  },
  {
    text: "What does the 'NaN' value represent in JavaScript?",
    type: "mc",
    answers: [
      { text: "Not a Number", correct: true },
      { text: "Null or Undefined", correct: false },
      { text: "Negative Number", correct: false },
      { text: "No Argument", correct: false }
    ]
  },
  {
    text: "Which method is used to add new elements to the end of an array in JavaScript?",
    type: "mc",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "append()", correct: false },
      { text: "insert()", correct: false }
    ]
  },
  {
    text: "What does the 'splice()' method do in JavaScript?",
    type: "mc",
    answers: [
      { text: "Changes the contents of an array by removing or replacing existing elements", correct: true },
      { text: "Adds new elements to the beginning of an array", correct: false },
      { text: "Sorts the elements of an array", correct: false },
      { text: "Reverses the order of the elements in an array", correct: false }
    ]
  },
  {
    text: "Which event occurs when the user clicks on an HTML element?",
    type: "mc",
    answers: [
      { text: "click", correct: true },
      { text: "mouseover", correct: false },
      { text: "keypress", correct: false },
      { text: "submit", correct: false }
    ]
  },
  {
    text: "What is the output of console.log(typeof []) in JavaScript?",
    type: "mc",
    answers: [
      { text: "'object'", correct: true },
      { text: "'array'", correct: false },
      { text: "'array'", correct: false },
      { text: "'undefined'", correct: false }
    ]
  },
  {
    text: "Which statement is used to stop the execution of a loop in JavaScript?",
    type: "mc",
    answers: [
      { text: "break", correct: true },
      { text: "stop", correct: false },
      { text: "end", correct: false },
      { text: "exit", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'catch' clause in a try...catch statement?",
    type: "mc",
    answers: [
      { text: "Handles exceptions thrown in the try block", correct: true },
      { text: "Defines a block of code to be executed if the condition is true", correct: false },
      { text: "Executes a block of code if a specified condition is true", correct: false },
      { text: "Specifies the statements to be executed if a condition is false", correct: false }
    ]
  },
  {
    text: "Which method is used to return the length of a string in JavaScript?",
    type: "mc",
    answers: [
      { text: "length", correct: true },
      { text: "size", correct: false },
      { text: "count", correct: false },
      { text: "sizeOf", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'continue' statement in a loop?",
    type: "mc",
    answers: [
      { text: "Skips the current iteration of the loop and continues with the next iteration", correct: true },
      { text: "Ends the execution of the loop", correct: false },
      { text: "Returns a value from a function", correct: false },
      { text: "Throws an error", correct: false }
    ]
  },
  {
    text: "Which method is used to convert a string to uppercase letters in JavaScript?",
    type: "mc",
    answers: [
      { text: "toUpperCase()", correct: true },
      { text: "toUpper()", correct: false },
      { text: "upperCase()", correct: false },
      { text: "toUpperCaseCase()", correct: false }
    ]
  },
  {
    text: "What is the purpose of the 'finally' clause in a try...catch statement?",
    type: "mc",
    answers: [
      { text: "Specifies a block of code to be executed regardless of the try...catch condition", correct: true },
      { text: "Defines a block of code to be executed if the condition is true", correct: false },
      { text: "Executes a block of code if a specified condition is true", correct: false },
      { text: "Specifies the statements to be executed if a condition is false", correct: false }
    ]
  },
  {
    text: "Which method is used to remove the first element from an array in JavaScript?",
    type: "mc",
    answers: [
      { text: "shift()", correct: true },
      { text: "unshift()", correct: false },
      { text: "pop()", correct: false },
      { text: "remove()", correct: false }
    ]
  },

];

module.exports = { quizData, questions };
