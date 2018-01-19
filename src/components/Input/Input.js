import React from 'react';

const Input = (props) => {
    let element = null;

    if (props.multi) {
        element = <input className="checkbox" type="checkbox" name={props.name}/>
    } else {
        element = <input className="multi" type="radio" name={props.name}/>
    }
    
    return (
        <div>
            {element}
            <label htmlFor={props.name}>{props.text}</label>
        </div>
    )
}

export default Input;
