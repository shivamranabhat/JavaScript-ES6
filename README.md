1. Concept of var, let, and const<br>

a. Var is used to access the declared variable both inside and outside the block of code as shown in the example<br>

function square()<br>
{<br>
    for(var number=1;number<5; number++)<br>
    {<br>
        console.log(number*number); <br>
    }<br>
    console.log(number*number); <br>
}<br>

square();<br>
<br>

Difference is if we use var to declare a variable we can use the number to <br>
display inside for loop as well as outside the loop but inside the funtion<br>

b. But using const or let we cant do that. It will throw an error<br>
![error](./output/const-error.png)<br>

function cube()<br>
{<br>
    for(let number=1;number<5; number++)<br>
    {<br>
        console.log(number*number*number); <br>
    }<br>
}<br>
cube();
<br>

In the above case we cannot use const as the value gets mutiplies three times and it is changable. <br>
In such case it is better to use let.<br>

2. Arrow function<br>
Arrow function in modern js is amazing. It makes the block of code cleaner and increase code quality.<br>
Let's take above function to convert using arrow function<br>

const result=()=> {for(var number=1;number<5; number++){console.log(number*number); }}<br>
result();
<br>

Another example<br>
const res = num=>console.log(num+num);<br>
res(3);
<br>

More use of arrow function including the use of filter() function<br>

const jobs=[<br>
    {
        id:1,
        title:'Laravel Dev',
        Salary:2000000,
        isActive:true
    },
    {
        id:2,
        title:'React Dev',
        Salary:3000000,
        isActive:true
    },
    {
        id:3,
        title:'Dot Net Dev',
        Salary:4000000,
        isActive:false
    }
]
<br>
Lets create a function in both traditional and moder way of JS<br>

a.Traditional way<br>

const checkIsActive = jobs.filter(function(jobs){<br>
    return console.log(jobs.isActive);<br>
})
<br>
b. Modern way<br>

const checkJobStatues = jobs.filter(jobs=>console.log(jobs.isActive));<br>
<br>

Write a function to display odd number between 1 to 50<br>

const oddNumbers = ()=>{for(let i=1;i<50;i++){if(i%2 !=0){console.log(i+2)}}};<br>
oddNumbers();
<br>

3.Lets use map() function<br>
const colors = ['Red','Green','Blue'];<br>

a. Traditional method<br>
const mapColor = colors.map(function(colors){<br>
    return console.log(`It's ${colors}`);<br>
});<br>


b. Modern method<br>
const colorItem = colors.map(colors=>console.log(`It's ${colors}`)); // `` is called template literal <br>
<br>
4. Object Destructuring<br>

const address ={<br>
    id:1,
    street:12,
    city:'Pokhara',
    country:'Nepal'
}
<br>
If we want to access object properties without using object destructuring<br>

const street= address.street;<br>
const city = address.city;<br>
const country = address.country;<br>
console.log(country);<br>

If we use object destructuring it will be easier to access all those properties<br>

const {street,city,country}= address;<br>
console.log(`Street:${street}, City:${city}, Country:${country}`);<br>

If we want to use different constant for that properties<br>
const{ city:ct} = address;
<br>
5. Spread Operators<br>

It works same as like concat() function but a little bit different<br>
Suppose we want to combine two arrays what we do is the following<br>
const num1 = [1,2,3,4];<br>
const num2 = [7,8,9,10];<br>

const combined = num1.concat(num2);<br>
console.log(combined);
<br>

What if we need to add one or more array elements between num1 and num2<br>
In this situation spread operator is useful we can use it using three dots "..." like following<br>
const combinedNum =[...num1,5,6,...num2];<br>
console.log(combinedNum);<br>
<br>
Simply we can do this for objects too

const info ={<br>
    id:1,<br>
    fname:'Shivam'<br>
}<br>

const fullInfo = {...info, lname:'Ranabhat'}<br>
console.log(fullInfo);<br>

//Inheritance in js<br>
class Animal<br>
{<br>
    constructor(type)<br>
    {<br>
        this.type = type;<br>
    }<br>
    eat()<br>
    {<br>
        console.log(`Hello. Im ${this.type}.`);<br>
    }<br>
}<br>
class Person extends Animal<br>
{<br>
    constructor(name,type)<br>
    {<br>
        super(type);<br>
        this.name = name;<br>
    }<br>
    walk()<br>
    {<br>
        console.log(`My name is ${this.name}.I can walk with two legs`);<br>
    }<br>
}<br>
const person = new Person("Shivam","Human");<br>
person.eat();<br>
person.walk();<br>