/**
 * Exercise 1 : String and Array Manipulation
 *
 * How to execute your code ?
 * Write your solution, then run the following command in your terminal:
 *      node exercise1.mjs
 */

// Expected result:
// [ 'Mobile phone', 'Laptop computer', 'Headphones', 'Smartwatch' ]

const users = [
  { id: 1, name: "Alice", age: 28, specialty: "Marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "Engineering" },
  { id: 3, name: "Charlie", age: 29, specialty: "Marketing" },
  { id: 4, name: "David", age: 42, specialty: "Engineering" },
  { id: 5, name: "Eve", age: 29, specialty: "Design" },
];


const userNames = users.map((user) => user.name);
console.log("userNames =", userNames);


const engineers = users.filter((user) => user.specialty === "Engineering");
console.log("engineers =", engineers);


const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const averageAge = totalAge / users.length;
console.log("averageAge =", averageAge);

const userDescriptions = users.map((user) => `${user.name} is ${user.age} years old.`);
console.log("userDescriptions =", userDescriptions);

// Your code here
