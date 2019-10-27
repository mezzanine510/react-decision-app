const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

const app = {
    title: 'Mai Taitle',
    subtitle: 'Mai Subtaitle'
}
// JSX - JavaScript XML
const template = (
    <div>
        <h1>{ app.title }</h1>
        <p>{ app.subtitle }</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
);

let user = {
    name: 'Nahuel',
    age: '34',
    location: 'Earth'
}

const templateTwo = (
    <div>
        <h1>{ user.name + '!!!' }</h1>
        <p>Age: { user.age }</p>
        <p>Location: { user.location }</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);