const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css'); // for CSS loader

const appRoot = document.getElementById('app');
const app = {
    title: 'Mai Taitle',
    subtitle: 'Mai Subtaitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
    
            <p>{ app.subtitle }</p>
            { app.subtitle && <p>{ app.subtitle }</p> }
            { app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
            <p>{ app.options.length }</p>
            <button onClick={ removeAll }>Remove All</button>
            <ol>
                <li>{ app.options[0] }</li>
                <li>{ app.options[1] }</li>
            </ol>
    
        <form onSubmit={ onFormSubmit }>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();