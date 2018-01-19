import React from 'react';
import './Question.css';

const Question = (props) => {
    return (
        <div className="Question">
            {props.content}
        </div>
    )
}

export default Question;