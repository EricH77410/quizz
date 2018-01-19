import React from 'react';
import './AnswerOptions.css';

const AnswerOptions = (props) => {
    const renderOptions = props.options.map((opt) => {
        return (
            <li key={opt.content}>
                <input type="radio"
                    className="Option-value"
                    name={props.content}
                />
                <label htmlFor={props.content}>{opt.content}</label>
                
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