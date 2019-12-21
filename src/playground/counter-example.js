const React = require('react');
const ReactDOM = require('react-dom');

class Counter extends React.Component {
    consructor(props) {
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAddOne() {
        console.log('Add one!');
    }

    handleSubtractOne() {
        console.log('Subtract one!');
    }

    handleReset() {
        console.log('Reset!');
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={ this.handleAddOne }>+1</button>
                <button onClick={ this.handleSubtractOne }>-1</button>
                <button onClick={ this.handleReset }>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     ++count;
//     RenderCounterApp();
// }

// const subtractOne = () => {
//     --count;
//     RenderCounterApp();
// }

// const resetCount = () => {
//     count = 0;
//     RenderCounterApp();
// }

// const RenderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: { count }</h1>
//             <button onClick={ addOne }>+1</button>
//             <button onClick={ subtractOne }>-1</button>
//             <button onClick={ resetCount }>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// }

// RenderCounterApp();