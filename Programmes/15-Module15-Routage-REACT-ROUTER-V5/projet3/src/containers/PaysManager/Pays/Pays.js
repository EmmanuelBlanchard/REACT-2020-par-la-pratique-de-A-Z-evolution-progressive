import React from 'react';
import {NavLink} from 'react-router-dom';

const pays = (props) => {
    return (
        <div className="row no-gutters border m-2 p-2">
            <div className="col-4">
                <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
            </div>
            <div className='col'>
                <h2>Nom : {props.nomFrancais}</h2>
                <div>Capitale : {props.capitale}</div>
                <div>Region : {props.region}</div>
                <NavLink to={props.match.url+"/"+props.nom} className="nav-link">Voir la fiche du pays</NavLink>
            </div>
        </div>
    );
};

export default pays;
