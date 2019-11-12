let count = 0;
const addOne = () => {
    ++count;
    RenderCounterApp();
}

const subtractOne = () => {
    --count;
    RenderCounterApp();
}

const resetCount = () => {
    count = 0;
    RenderCounterApp();
}

const RenderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: { count }</h1>
            <button onClick={ addOne }>+1</button>
            <button onClick={ subtractOne }>-1</button>
            <button onClick={ resetCount }>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

RenderCounterApp();