//Inheritance in js
class Animal
{
    constructor(type)
    {
        this.type = type;
    }
    eat()
    {
        console.log(`Hello. Im ${this.type}.`);
    }
}
class Person extends Animal
{
    constructor(name,type)
    {
        super(type);
        this.name = name;
    }
    walk()
    {
        console.log(`My name is ${this.name}.I can walk with two legs`);
    }
}
const person = new Person("Shivam","Human");
person.eat();
person.walk();