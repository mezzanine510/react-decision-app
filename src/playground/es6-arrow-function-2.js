// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
}

const arrowAdd = (a, b) => {
    console.log(arguments);
    return a + b;
}

// 'this' keyword - no longer bound

const user = {
    name: 'Nahuel',
    cities: ['San Francisco', 'Buenos Aires', 'Alameda'],
    printPlacesLived() {
        const cityMessages = this.cities.map(city => city.toUpperCase());

        return cityMessages;
    }
};

console.log(user.printPlacesLived());


// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    numbers: [3, 2, 5, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());