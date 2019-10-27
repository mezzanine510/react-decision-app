const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

// JSX - JavaScript XML
var template = <p>The world be changin'</p>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);