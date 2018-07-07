class Person {
    constructor(name = 'Anonymous', age = 0) { // Default argument value when none is provided
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi. I am ' + this.name + '!'; // Old
        return `Hi. I am ${this.name}!`; // Template String in ES6. Notice backticks!!!
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major; // if major == undefined: !this.major = true, !!this.major = false
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description +=  ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Maja Filakovic', 26, 'Croatia');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
