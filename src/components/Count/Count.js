import React from 'react';
import './Count.css';

const Count = (props) => {
    return (
        <div className="Count">
            <p>Question {props.count} of {props.total}</p>
        </div>
    )
}

export default Count;