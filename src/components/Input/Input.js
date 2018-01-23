import React from 'react';

const Input = (props) => {
    let element = null;

    if (props.multi) {
        element = <input className="multi" type="checkbox" name={props.name} onChange={props.change} id={props.text} />
    } else {
        element = <input className="single" type="radio" name={props.id} onChange={props.change} id={props.text} value={props.text} />
    }

    return (
        <div>
            {element}
            <label htmlFor={props.text}>{props.text}</label>
        </div>
    )
}

export default Input;
