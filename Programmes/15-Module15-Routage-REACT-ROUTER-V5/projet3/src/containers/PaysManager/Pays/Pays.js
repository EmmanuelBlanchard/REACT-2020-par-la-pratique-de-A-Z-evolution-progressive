import React from 'react';
import {NavLink} from 'react-router-dom';

const pays = (props) => {
    let content="";
    if(!props.solo) { //tous les pays
        content = (
            <NavLink to={"/pays/"+props.nom} className="nav-link">Voir la fiche du pays</NavLink>
        );
    } else {   
        content = (
            <>
                <div>Monnaie : {props.monnaie}</div>
                <div>Symbole de la monnaie : {props.monnaieSymbol}</div>
            </>
        );
    }

    return (
        <div className="row no-gutters border m-2 p-2">
            <div className="col-4">
                <img src={props.drapeau} width="100%" className="p-2" alt={props.nom} />
            </div>
            <div className='col'>
                <h2>Nom : {props.nomFrancais}</h2>
                <div>Capitale : {props.capitale}</div>
                <div>Region : {props.region}</div>
                {content}
            </div>
        </div>
    );
};

export default pays;
