const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

// JSX - JavaScript XML
var template = (
    <div>
        <h1>The world be changin'</h1>
        <p>We be testin' also as well.</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);