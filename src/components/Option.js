import React from 'react';

const Option = (props) => (
    <div>
        <p>{ props.optionText }</p>
        <button
            className="button button--link"
            onClick={ (e) => { // e, or event, is not necessary
                props.removeOption(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;