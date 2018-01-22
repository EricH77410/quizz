import React from 'react';

const Results = (props) => {
    const success = <p className="success">Bravo vous avez réussi le test.</p>
    const echec = <p className="echec">Vous n'avez pas réussi le test.</p>
    let display = null
    if (props.good >= props.total / 2){
        display = success
    } else {
        display = echec
    }
    return (
        <div className="Results">
            <h3>Resultat : {props.good} bonnes réponses sur {props.total} quesitons</h3>
            {display}
        </div>
    )
}

export default Results;