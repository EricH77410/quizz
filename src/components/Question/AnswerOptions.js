import React from 'react';
import './AnswerOptions.css';

import Input from '../Input/Input'

const AnswerOptions = (props) => {
    const renderOptions = props.options.map((opt) => {
        return (
            <li className="Answer-Item" key={opt.content}>
                <Input type={props.multi}
                    className="Option-value"
                    name={props.content}
                    text={opt.content}
                    multi={props.multi}
                    change={props.change}
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