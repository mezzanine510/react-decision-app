const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

const app = {
    title: 'Mai Taitle',
    subtitle: 'Mai Subtaitle',
    options: [ 'One', 'Two' ]
}

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{ app.title }</h1>

        <p>{ app.subtitle }</p>
        { app.subtitle && <p>{ app.subtitle }</p> }
        { app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
        <ul>
            <li>{ app.options[0] }</li>
            <li>{ app.options[1] }</li>
        </ul>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('Add one');
    count++;
}

const subtractOne = () => {
    console.log('Subtract one');
    count--;
}

const resetCount = () => {
    console.log('Reset');
    count = 0;
}

const templateTwo = (
    <div>
        <h1>Count: { count }</h1>
        <button onClick={ addOne }>+1</button>
        <button onClick={ subtractOne }>-1</button>
        <button onClick={ resetCount }>reset</button>
    </div>
);

console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);