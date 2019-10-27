const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

// JSX - JavaScript XML
const template = (
    <div>
        <h1>The world be changin'</h1>
        <p>We be testin' also as well.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
);

const templateTwo = (
    <div>
        <h1>Nahuel</h1>
        <p>Age: 26</p>
        <p>Location: Planet Earth</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);