import React from 'react';

const Input = (props) => {
    let element = null;

    if (props.multi) {
        element = <input className="multi" type="checkbox" name={props.name} onChange={props.change} id={props.text} />
    } else {
        element = <input className="single" type="radio" name={props.name} onChange={props.change} id={props.text} value={false}/>
    }
    
    return (
        <div>
            {element}
            <label htmlFor={props.name}>{props.text}</label>
        </div>
    )
}

export default Input;
