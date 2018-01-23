import React from 'react';
import './AnswerOptions.css';

import Input from '../Input/Input'

const AnswerOptions = (props) => {
    const renderOptions = props.options.map((opt) => {
        return (
            <li className="Answer-Item" key={opt.content}>
                <Input 
                    multi={props.multi}
                    className="Option-value"
                    name={props.content}
                    text={opt.content}
                    change={props.change}
                    id={props.id}
                />                
            </li>
        )
    })
    return (
        <div className="Answer-Main">
            <ul className="Answer-Options">
                {renderOptions}
            </ul>
        </div>
    )
}

export default AnswerOptions;