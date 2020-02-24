class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
    }
}


let p1 = new Person('Bradford', 29, 'Atlanta');
let p2 = new Person('Irving', 29, 'Birmingham');
let p3 = new Person('Jack', 29, 'Atlanta');
let p4 = new Person('John', 29, 'Atlanta');
let p5 = new Person('Andy', 29, 'Atlanta');
let p6 = new Person('Thomas', 29, 'Atlanta');

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
p6.sayHello();

