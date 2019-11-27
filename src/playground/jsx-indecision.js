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

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(option);
}

const renderApp = () => {
    const template = (
        <div>
            <h1>{ app.title }</h1>
    
            <p>{ app.subtitle }</p>
            { app.subtitle && <p>{ app.subtitle }</p> }
            { app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p> }
            <p>{ app.options.length }</p>
            <button onClick={ makeDecision } disabled={ app.options.length === 0 }>What should I do?</button>
            <button onClick={ removeAll }>Remove All</button>
            <ol>
                {
                    app.options.map(option => <p key={ option }>{ option }</p>)
                }
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