import React from 'react';

const pays = (props) => (
    <div className="row no-gutters border rounded m-2 p-2">
        <div className="col-4">
            <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
        </div>
        <div className='col'>
            <h2>Nom : {props.nomFrancais}</h2>
            <div>Capitale : {props.capitale}</div>
            <div>Region : {props.region}</div>
        </div>
    </div>
);

export default pays;
