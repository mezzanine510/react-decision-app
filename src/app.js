import React from 'react';
import ReactDOM from 'react-dom';
import validator from "validator";
import subtract, { square, add } from './utils'; // for debugging
import isSeniorCitizen, { isAdult, canDrink } from './person';
import './style.css';

// console.log(square(2));
// console.log(add(5, 3));
// console.log(subtract(4, 3));
// console.log(isAdult(29));
// console.log(canDrink(14));
// console.log(isSeniorCitizen(64));
console.log(validator.isEmail('valid@geezmail.net'));



class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.removeOption = this.removeOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }))
            }
        }
        catch (error) {
            console.log('Error:', error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    addOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // returns -1 if option has duplicate in array
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    removeAllOptions() {
        this.setState( () => ({ options: [] }) );
    }

    removeOption(targetOption) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return targetOption !== option;
            }
        )}));
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
                    removeAllOptions={ this.removeAllOptions }
                    removeOption={ this.removeOption }
                />
                
                <AddOption
                    addOption={ this.addOption }
                />
            </div>
        );
    }
}

// // This was used when we were passing 'options' as props - now we use an empty array by default 
// DecisionApp.defaultProps = {
//     options: []
// }

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
            <button onClick={ props.removeAllOptions }>Remove All</button>
            { props.options.length === 0 && <p>Please add an option to get started.</p> }
            {
                props.options.map((option) => 
                    <Option
                        key={ option }
                        optionText={ option }
                        removeOption={ props.removeOption }
                    />
                )
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p>{ props.optionText }</p>
            <button
                onClick={ (e) => { // e, or event, is not necessary
                    props.removeOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
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

        this.setState(() => ({ error }));

        if (!error) {
            event.target.elements.option.value = '';
        }
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