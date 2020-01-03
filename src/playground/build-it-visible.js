const React = require('react');
const ReactDOM = require('react-dom');
require('../app.css');

const appRoot = document.getElementById('app');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return { visibility: !prevState.visibility };
        });
    }

    render() {
        return (
          <div>
              <h1>Visibility Toggle</h1>
              <button onClick={ this.toggleVisibility }>
                  { this.state.visibility ? 'Hide details' : 'Show details' }
              </button>
              { this.state.visibility && (
                  <div>
                      <p>Details Here! Life Is Awesome! Always Remember That!</p>
                  </div>
              ) }
          </div>  
        );
    }
}

ReactDOM.render(<VisibilityToggle />, appRoot);

// const appRoot = document.getElementById('app');
// const app = {
//     title: 'Visibility Toggle',
//     details: '',
//     buttonText: 'Show details'
// }

// const toggleDetails = () => {
//     app.details === '' ? showDetails() : hideDetails();
// }

// const showDetails = () => {
//     app.details = 'Details Here! Life Is Awesome! Always Remember That!';
//     app.buttonText = 'Hide details';
//     renderApp();
// }

// const hideDetails = () => {
//     app.details = '';
//     app.buttonText = 'Show details';
//     renderApp();
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{ app.title }</h1>
//             <button onClick={ toggleDetails }>{ app.buttonText }</button>
//             <p id="details">{ app.details }</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderApp();