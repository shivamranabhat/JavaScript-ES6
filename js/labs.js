//Create a class Person with properties name and age, and a method greet() that logs a greeting to the console. 
//Then create a subclass Student that extends the Person class with an additional property major and a method study() that logs a message to the console.

class Person
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    greet()
    {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Student extends Person
{
    constructor(name,age,major)
    {
       super(name,age);
        this.major = major;
    }
    study()
    {
        console.log(`I am a student in major ${this.major}`);
    }
}

const person = new Person('Shivam',22);
person.greet();

const student = new Student('Rohan',20,'Science');
student.greet();
student.study();

//Create a function that takes an array of numbers and returns an array with only the even numbers using the filter() method in ES6.
const numbers = [1,2,3,4,5,6,7,8,9,10]
const even = numbers.filter(number=>(number%2==0));
console.log(even);

//Create a function that takes an array of strings and returns a new array with the strings sorted 
//alphabetically using the sort() method in ES6.
const strings = ['h','a','f','b'];
const sorted = strings.sort();
console.log(sorted);

//Write a function that takes an array of numbers and returns the sum of the squared values using the map() 
//and reduce() methods in ES6.
const array =[2,3,4,5];
const sumSquare = array.map(number=>number*number).reduce((prev,curr)=>prev+curr,0);
console.log(sumSquare);

//Write a function that takes an array of objects representing students with properties name and grades, and returns an array of objects with a new property average added to each object. 
//The average property should be the average of the grades array.
const students = [
  { name: 'John', grades: [90, 85, 95] },
  { name: 'Jane', grades: [80, 75, 70] },
  { name: 'Bob', grades: [85, 90, 95] },
];
const avgMarks = students.map(student=>({...student,Average:student.grades.reduce((prev,curr)=>prev+curr,0)}));
console.log(avgMarks);
