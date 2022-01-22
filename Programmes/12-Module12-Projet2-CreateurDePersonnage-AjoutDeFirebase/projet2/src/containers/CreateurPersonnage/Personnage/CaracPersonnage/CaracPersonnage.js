import React from 'react';
import Carateristique from './Carac/Carac';

const caracPersonnage = (props) => (
    <>
        <div>
            Points restants :  
            <span className="badge bg-success mx-2">
                {props.nombrePointsDisponibles}
            </span>
        </div>
        <div>
            <Carateristique 
                nombrePoints={props.force}
                moins={() => props.enleverPoint('force')}
                plus={() => props.ajouterPoint('force')}
            >Force</Carateristique>
            <Carateristique 
                nombrePoints={props.agilite}
                moins={() => props.enleverPoint('agilite')}
                plus={() => props.ajouterPoint('agilite')}
            >Agilite</Carateristique>
            <Carateristique 
                nombrePoints={props.intelligence}
                moins={() => props.enleverPoint('intelligence')}
                plus={() => props.ajouterPoint('intelligence')}
            >Intelligence</Carateristique>
        </div>
    </>
);

export default caracPersonnage;