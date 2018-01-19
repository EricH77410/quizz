import React from 'react';
import './Question.css';

import AnswerOptions from './AnswerOptions';

const Question = (props) => {
    const msg = <p className="Multi-msg">Plusieurs réponse possible</p>
    return (
        <div className="Question">            
            {props.content}
            {props.multi ? msg : null}
            <div className="Options">
                <AnswerOptions options={props.options} multi={props.multi} content={props.content}/>
            </div>
        </div>
    )
}

export default Question;