import React from 'React';
import Header from './Header';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import OptionModal from './OptionModal';

export default class DecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: false
    }

    addOption = (option) => {
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
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        
        const option = this.state.options[randomNum];
        this.setState({ selectedOption: option });
    }

    clearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }));
    };
    
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
                    subtitle={ subtitle } />

                <div className="container">
                    <Action
                        hasOptions={ this.state.options.length > 0 }
                        handlePick={ this.handlePick } />

                    <Options
                        options={ this.state.options }
                        removeAllOptions={ this.removeAllOptions }
                        removeOption={ this.removeOption } />
                    
                    <AddOption
                        options={ this.state.options }
                        addOption={ this.addOption } />
                </div>

                <OptionModal 
                    selectedOption={ this.state.selectedOption }
                    clearSelectedOption={ this.clearSelectedOption } />
            </div>
        );
    }
}