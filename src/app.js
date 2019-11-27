const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

class DecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Decision</h1>
                <h2>Put your life in the hands of yourself.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            
                <button>What should I do?</button>
            
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
                <Option />
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>Option</p>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <button>Add</button>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(<DecisionApp />, document.getElementById('app'));