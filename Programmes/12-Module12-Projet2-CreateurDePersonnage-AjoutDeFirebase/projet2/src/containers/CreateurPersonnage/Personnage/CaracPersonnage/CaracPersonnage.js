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
            <Carateristique nombrePoints={props.force}>Force</Carateristique>
            <Carateristique nombrePoints={props.agilite}>Agilite</Carateristique>
            <Carateristique nombrePoints={props.intelligence}>Intelligence</Carateristique>
        </div>
    </>
);

export default caracPersonnage;