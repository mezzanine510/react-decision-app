const React = require('react');
const ReactDOM = require('react-dom');
require('./app.css');

class DecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: ['test']
        }
    }

    deleteOptions() {
        this.setState(() => {
            return { options: [] }
        });
    }

    // addOption
    addOption() {
        this.setState((prevState) => {
            return { options: prevState.options.push() }
        })
    }

    render() {
        const title = 'Decision';
        const subtitle = 'Put your life in the hands of yourself.';

        return (
            <div>
                <Header title={ title } subtitle={ subtitle } />
                <Action hasOptions={ this.state.options.length > 0 }/>
                <Options options={ this.state.options }
                         deleteOptions={ this.deleteOptions } />
                <AddOption addOption={ this.addOption }/>
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
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.option.value; // .elements is a React method that lets you access the elements of an event target
        
        console.log(option ? alert(option.trim()) : null);
    }
    
    render() {
        return (
            <form onSubmit={ this.handleAddOption }>
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