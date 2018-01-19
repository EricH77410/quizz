import React from 'react';
import './Question.css';

import AnswerOptions from './AnswerOptions';

const Question = (props) => {
    return (
        <div className="Question">
            {props.content}
            <div className="Options">
                <AnswerOptions options={props.options} multi={props.multi} content={props.content}/>
            </div>
        </div>
    )
}

export default Question;