import React from 'React';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';

export default class DecisionApp extends React.Component {
    state = {
        options: []
    }

    addOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // returns -1 if option has duplicate in array
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    removeAllOptions = () => {
        this.setState( () => ({ options: [] }) );
    }

    removeOption = (targetOption) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return targetOption !== option;
            }
        )}));
    }

    handlePick = () => {
        console.log('handlePick() executed!');
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