// print a string to the console
console.log("Hello, World!");

// declare a variable and assign a value
let name = "Alice"; 
// print the variable to the console
console.log(name);

// declare a function that takes a parameter and returns a greeting
function greet(person) {
    return "Hello, " + person + "!";
}       

// call the function and print the result
console.log(greet(name));

// declare an array of numbers
let numbers = [1, 2, 3, 4, 5];
// print the array to the console
// console.log(numbers);

// declare an object with properties
let person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 30
};

// print the object to the console
console.log(person);

// access a property of the object and print it
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);    

function add(a, b) {
    return a + b;
}   
console.log(add(5, 10)); // Output: 15

function subtract(a, b) {
    return a - b;
}   
console.log(subtract(10, 5)); // Output: 5

// output formatting
let price = 19.99;
console.log("The price is $" + price.toFixed(2)); // Output: The price is $19.99    




// declare an array of fruits
let fruits = ["apple", "banana", "cherry"];
//print the array to the console
console.log(fruits);
// access an element of the array and print it using loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//  print using  arrow function
fruits.forEach(fruit => console.log(fruit));



// arrow function example
const square = x => x * x;
console.log(square(5)); // Output: 25

// declare a variable using let and const
let mutableVariable = "I can change";
const immutableVariable = "I cannot change";

console.log(mutableVariable); // Output: I can change
console.log(immutableVariable); // Output: I cannot change  
// change the value of the mutable variable
mutableVariable = "I have changed";
console.log(mutableVariable); // Output: I have changed
// try to change the value of the immutable variable (this will cause an error)
immutableVariable = "I have changed"; // Uncaught TypeError: Assignment to constant variable.
console.log(immutableVariable); // This line will not be executed due to the error 


// array methods example
let numbers = [1, 2, 3, 4, 5];
// use the map method to create a new array of squares
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]
// use the filter method to create a new array of even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// use the reduce method to calculate the sum of the numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// object methods example
let person = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 25,   
    fullName: function() {
	    return this.firstName + " " + this.lastName;
}
};
console.log(person.fullName()); // Output: Alice Johnson


// class example
class Animal {
    constructor(name) {   

        this.name = name;
        // this.species = species;
    }
    makeSound() {   
        console.log(this.name + " makes a sound.");
    }   
}   
let dog = new Animal("Buddy");
let cat = new Animal("Whiskers", "Cat");
dog.makeSound(); // Output: Buddy makes a sound.
cat.makeSound(); // Output: Whiskers makes a sound.


// async function example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 200);    
    });
}
async function getData() {
    try {
        let result = await fetchData();
        console.log(result); // Output: Data fetched successfully!
    } catch (error) {
        console.error("Error fetching data:", error);
    }   
}
getData();


// map example
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// square using for loop
let squaresForLoop = [];
for (let i = 0; i < numbers.length; i++) {
    squaresForLoop.push(numbers[i] * numbers[i]);
}
console.log(squaresForLoop); // Output: [1, 4, 9, 16, 25]

// for each example
let squaresForEach = [];
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => squaresForEach.push(num * num));
console.log(squaresForEach); // Output: [1, 4, 9, 16, 25]

function Mybutton() {
    return(
        <button>Click me</button>
    )
}

