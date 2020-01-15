const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: []
        }
    }

    deleteOptions() {
        this.setState(() => {
            return { options: [] }
        });
    }

    addOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // returns -1 if option is a duplicate
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return { options: prevState.options.concat(option) }
        });
    }

    handlePick() {
        console.log('handlePick() executed!');
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
                    handlePick={ this.handlePick }
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

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            { props.subtitle && <h2>{ props.subtitle }</h2> }
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={ props.handlePick } 
                    disabled={ !props.hasOptions }>
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={ props.deleteOptions }>Remove All</button>
            {
                props.options.map((option) => 
                    <Option key={ option } optionText={ option } />
                )
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <p>{ props.optionText }</p>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    addOption(event) {
        event.preventDefault();
        // .elements is a React method that lets you access the elements of an event target
        const option = event.target.elements.option.value;
        const error = this.props.addOption(option);

        this.setState(() => {
            return { error }
        });
    }
    
    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.addOption }>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<DecisionApp />, document.getElementById('app'));