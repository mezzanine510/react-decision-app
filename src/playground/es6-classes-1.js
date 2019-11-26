class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName || 'test first name';
        this.lastName = lastName || 'test last name';
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

const me = new Person('Nahuel', 'Ruda');
const otherPerson = new Person();

const myName = me.getName();
console.log(me.getName());
console.log(myName);
console.log(me.getGreeting());
console.log(me.getDescription());