const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

class DecisionApp extends React.Component {
    render() {
        const title = 'Decision';
        const subtitle = 'Put your life in the hands of yourself.';
        const options = ['First thing', 'Second thing', 'Third thing'];

        return (
            <div>
                <Header title={ title } subtitle={ subtitle } />
                <Action />
                <Options options={ options } />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <h2>{ this.props.subtitle }</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handled the pick!');
    }

    render() {
        return (
            
                <button onClick={ this.handlePick }>What should I do?</button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={ option } optionText={ option } />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <p>{ this.props.optionText }</p>
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

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

ReactDOM.render(<DecisionApp />, document.getElementById('app'));