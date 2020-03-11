import React from 'react';
import ReactDOM from 'react-dom';
import DecisionApp from './components/DecisionApp';
// import Validator from "validator";
import './style.css';

ReactDOM.render(<DecisionApp />, document.getElementById('app'));



// // ----------- Old method -----------
// class OldSyntax {
//     constructor(name) {
//         this.name = name;
//         this.getGreeting = this.getGreeting.bind(this);
//     }

//     getGreeting() {
//         return `Hi, my name is ${ this.name }.`;
//     }
// }

// const oldSyntax = new OldSyntax('Nahuel');
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // ----------- New class properties method -----------
// class NewSyntax {
//     name = 'BORUTOSAN';

//     getGreeting = () => {
//         return `Hi, my name is ${ this.name }.`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());