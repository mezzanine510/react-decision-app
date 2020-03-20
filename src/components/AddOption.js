import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    addOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value;
        const error = this.checkForErrors(option);

        this.setState(() => ({ error }));

        if (!error) {
            this.props.addOption(option);
            event.target.elements.option.value = '';
        }
    }
    
    checkForErrors = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.props.options.indexOf(option) > -1) { // returns -1 if option has duplicate in array
            return 'This option already exists';
        }
        else {
            return null;
        }
    }
    
    render() {
        return (
            <div>
                { this.state.error && <p className="add-option-error">{ this.state.error }</p> }
                <form className="add-option" 
                      onSubmit={ this.addOption }>
                    <input className="add-option__input"
                           type="text"
                           name="option"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}