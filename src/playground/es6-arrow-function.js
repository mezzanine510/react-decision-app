// const square = function(x) {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

const firstName = 'Mike';
const lastName = 'Smith';
const fullName = `${ firstName } ${ lastName }`;

const getFirstName = (fullName) => fullName.split(' ')[0];
const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName(fullName), getLastName(fullName));