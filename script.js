let person1 = {
    name: 'Sonic',
    sayHello: function () {
        console.log("Hello! My name is " + this.name + "!");
    }
}

let person2 = {
    name: 'Tails',
    sayHello: function () {
        console.log("Hello! My name is " + this.name + "!");
    }
}

let person3 = {
    name: 'Knuckles',
    sayHello: function () {
        console.log("Hello! My name is " + this.name + "!");
    }
}

let person4 = {
    name: 'Amy Rose',
    sayHello: function () {
        console.log("Hello! My name is " + this.name + "!");
    }
}

let person5 = {
    name: 'Blaze',
    sayHello: function () {
        console.log("Hello! My name is " + this.name + "!");
    }
}

person1.sayHello();

person2.sayHello();

person3.sayHello();

person4.sayHello();

person5.sayHello();

class person {
    constructor(name, city, age) {
        this.name = name;
        this.city = city;
        this.age = age;
    }
    sayHello() {
        console.log(`Hey! My name is ${this.name}. I am ${this.age} years old and live in ${this.city}.`);
    }
}

let newPerson1 = new person('Sonic', 'Green Hill Zone', 15);
person1.sayHello();

let newPerson2 = new person('Tails', 'Emerald Coast', 8);
person2.sayHello();

let newPerson3 = new person('Knuckles', 'Angel Island', 16);
person3.sayHello();

let newPerson4 = new person('Amy Rose', 'Little Planet', 12);
person4.sayHello();

let newPerson5 = new person('Blaze', 'Sol Zone', 14);
person5.sayHello();

class Vehicle {
    constructor(type, manufacturer, wheels) {
        this.type = type;
        this.manufacturer = manufacturer;
        this.wheels = wheels;
    }
    aboutVehicle() {
        console.log(`Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(type, manufacturer, wheels, doors, bed) {
        super(type, manufacturer, wheels);
        this.doors = doors;
        this.bed = bed;
    }
    aboutVehicle() {
        let baseString = `Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels and ${this.doors} doors.`;
        if (this.bed === true) {
            baseString = (baseString + ' It has a truck bed.');
            console.log(baseString);
        } else {
            console.log(baseString);
        }
    }
}

class Sedan extends Vehicle {
    constructor(type, manufacturer, wheels, size, mpg) {
        super(type, manufacturer, wheels);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels. Its size is ${this.size} and it gets ${this.mpg} miles to the gallon.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufacturer, wheels, steering, doors) {
        super(type, manufacturer, wheels);
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        let baseString = `Vehicle type is ${this.type}, manufactured by ${this.manufacturer}. It has ${this.wheels} wheels.`;
        if (this.steering === 'bars' || this.steering === 'handlebars') {
            baseString = baseString + ` It steers via ${this.steering}.`;
        }
        if (this.doors === 0 || this.doors === 'none') {
            baseString = baseString + ` It has no doors (its a ${this.type}, duh).`;
        }
        console.log(baseString);
    }
}

let sedan = new Sedan('sedan', 'Honda', 4, 'medium', 30);
sedan.aboutVehicle();

let truck = new Truck('truck', 'Toyota', 4, 2, true);
truck.aboutVehicle();

let bike = new Motorcycle('motorcycle', 'Kawasaki', 2, 'handlebars', 'none');
bike.aboutVehicle();
