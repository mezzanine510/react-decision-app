const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);

            if (count) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            console.log('Error:', e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const json = JSON.stringify(this.state.count);
        localStorage.setItem('count', json);
    }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount');
    // }

    handleAddOne() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        });
    }

    handleSubtractOne() {
        this.setState((prevState) => {
            return { count: prevState.count - 1 }
        });
    }

    handleReset() {
        this.setState(() => {
            return { count: 0 }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleSubtractOne }>-1</button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));