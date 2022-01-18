import React from 'react';

// Utilisation du système de propriété, props pour indiquer les propriétés que l'on récupère
// Syntaxe ES6
const personne = props => {
    return (
        <>
            <h1>{props.nom}</h1>
            <div>Age : {props.age}</div>
            <div>Sexe : {props.sexe}</div>
        </>   
    );
}

export default personne;