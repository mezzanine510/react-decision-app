import React from 'react';

const Option = (props) => {
    return (
        <div>
            <p>{ props.optionText }</p>
            <button
                onClick={ (e) => { // e, or event, is not necessary
                    props.removeOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    );
}

export default Option;