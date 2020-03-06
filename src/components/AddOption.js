import React from 'react';

export default class AddOption extends React.Component {
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