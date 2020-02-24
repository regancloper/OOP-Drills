let person1 = {
    name: "Bradford Church",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person2 = {
    name: "Steve Brady",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person3 = {
    name: "Irving Jones",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person4 = {
    name: "Tyler Windham",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

let person5 = {
    name: "Greg Pipes",
    sayHello: function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();

