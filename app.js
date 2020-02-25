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

class Vehicle {
    constructor(numwheels, manufacturer) {
        this.numwheels = numwheels;
        this.manufacturer = manufacturer;
    }
    get type() {
        return this.constructor.name.toLowerCase();
    }
    aboutVehicle() {
        console.log(`This is a ${(this.type)}, which was made by ${this.manufacturer}, and has ${this.numwheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, numdoors) {
        super(4, manufacturer);
        this.numdoors = numdoors;
        this.hasTruckBed = true;
    }
    aboutVehicle() {
        console.log(`This is a ${(this.type)}, which was made by ${this.manufacturer}.  It has ${this.numdoors} doors, ${this.numwheels} wheels, and a truck bed.`);
    }
}

class Sedan extends Vehicle {
    constructor(manufacturer, numdoors, size, mpg) {
        super(4, manufacturer);
        this.numdoors = numdoors;
        this.size = size;
        this.hasTruckBed = false;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${(this.type)}, which was made by ${this.manufacturer}.  It has ${this.numdoors} doors, is ${this.size}-size, gets ${this.mpg} miles per gallon, has ${this.numwheels} wheels, and no truck bed.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer) {
        super(2, manufacturer);
        this.numdoors = 0;
        this.steering = "handlebar";
    }
    aboutVehicle() {
        console.log(`This is a ${(this.type)}, which was made by ${this.manufacturer}.  It has ${this.numdoors} doors, ${this.steering}-based steering, has ${this.numwheels} wheels, and can't go in reverse.`);
    }
}

let truck = new Truck("Toyota", 4);
let vehicle = new Vehicle(4, "Mazda");
let sedan = new Sedan("Acura", 2, "small", 43);
let motorcycle = new Motorcycle("Harley");

truck.aboutVehicle();
vehicle.aboutVehicle();
sedan.aboutVehicle();
motorcycle.aboutVehicle();
