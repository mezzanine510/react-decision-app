const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: ['test', 'another test']
        }
    }

    deleteOptions() {
        this.setState(() => {
            return { options: [] }
        });
    }

    addOption(option) {
        console.log(option);
        // this.setState((prevState, option) => {
        //     return { options: prevState.options.push(option) }
        // })
    }

    render() {
        const title = 'Decision';
        const subtitle = 'Put your life in the hands of yourself.';

        return (
            <div>
                <Header
                    title={ title }
                    subtitle={ subtitle }
                />
                <Action
                    hasOptions={ this.state.options.length > 0 }
                    addOption={ this.addOption }
                />
                <Options
                    options={ this.state.options }
                    deleteOptions={ this.deleteOptions }
                />
                <AddOption
                    addOption={ this.addOption }
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
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
        alert('handlPick() handled the pick!');
    }

    render() {
        return (
            <div>
                <button onClick={ this.handlePick } 
                        disabled={ !this.props.hasOptions }>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={ this.props.deleteOptions }>Remove All</button>
                {
                    this.props.options.map((option) => 
                        <Option key={ option } optionText={ option } />
                    )
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
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
    }

    addOption(event) {
        event.preventDefault();
        // .elements is a React method that lets you access the elements of an event target
        const option = event.target.elements.option.value;
        
        if (option) {
            this.props.addOption(option);
        }
    }
    
    render() {
        return (
            <form onSubmit={ this.addOption }>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
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