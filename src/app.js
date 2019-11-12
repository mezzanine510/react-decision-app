const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

console.log('This be changin');

const app = {
    title: 'Mai Taitle',
    subtitle: 'Mai Subtaitle',
    options: [ 'Item One', 'Item Two' ]
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

    <form>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);