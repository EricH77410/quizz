import React from 'react';
import './AnswerOptions.css';

import Input from '../Input/Input'

const AnswerOptions = (props) => {
    const renderOptions = props.options.map((opt) => {
        return (
            <li key={opt.content}>
                <Input type={props.multi}
                    className="Option-value"
                    name={props.content}
                    text={opt.content}
                    multi={props.multi}
                />
                
                
            </li>
        )
    })
    return (
        <div className="Answer-Options">
            <ul>
                {renderOptions}
            </ul>
        </div>
    )
}

export default AnswerOptions;