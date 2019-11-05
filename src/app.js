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
<<<<<<< HEAD

        <p>{ app.subtitle }</p>
=======
        { app.subtitle && <p>{ app.subtitle }</p> }
        { app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
>>>>>>> d69e17980151b19c3e835823103beb6db17fb8ce
        <ul>
            <li>{ app.options[0] }</li>
            <li>{ app.options[1] }</li>
        </ul>
    </div>
);

const user = {
    name: 'Nahuel',
    age: 34,
    location: 'Earth'
}

const getLocation = (location) => {
    if (location) {
        return <p>Location: { location }</p>
    }
}

const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { user.age >= 18 && <p>Age: { user.age }</p> }
        { getLocation(user.location) }
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);