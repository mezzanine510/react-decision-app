class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName || 'firstName';
        this.lastName = lastName || 'lastName';
        this.age = age || 34;
    }

    getName() {
        return `${ this.firstName + ' ' + this.lastName }`;
    }

    getGreeting() {
        return `Hullo! My name is ${ this.firstName }.`;
    }

    getDescription() {
        return `${ this.firstName } is ${ this.age } years old.`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, major) {
        super(firstName, lastName, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += `Their major is ${ this.major }`;
        }
        return `${ this.firstName } is ${ this.age } years old and majors in ${ this.major }.`;
    }
}

class Traveler extends Person {
    constructor(firstName, lastName, age, homeLocation) {
        super(firstName, lastName, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I am visiting from ${ this.homeLocation }.`;
        }
        
        return greeting;
    }
}

const me = new Traveler('Nahuel', 'Ruda', 30, 'Rawrland');
const otherPerson = new Person();

console.log(me.getName());
console.log(me.getDescription());
console.log(me.getGreeting());