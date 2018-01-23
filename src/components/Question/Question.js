import React from 'react';
import './Question.css';

import AnswerOptions from './AnswerOptions';

const Question = (props) => {
    const msg = <p className="Multi-msg">Plusieurs réponse possible</p>
    return (
        <div className="Question">
            <div className="Question__title">
                <h3>{props.content}</h3>            
                {props.multi ? msg : null}
            </div>            
            
            <div className="Options">
                <AnswerOptions options={props.options} multi={props.multi} content={props.content} change={props.onItemChanged} id={props.id} answer={props.answer}/>
            </div>

            <div className="action">
                <button className="btn-validate" onClick={props.clicked}>Valider</button>
            </div>
        </div>
    )
}

export default Question;