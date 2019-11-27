const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

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
                <p>option 1</p>
                <p>option 2</p>
                <p>option 3</p>
            </div>
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

ReactDOM.render(jsx, document.getElementById('app'));