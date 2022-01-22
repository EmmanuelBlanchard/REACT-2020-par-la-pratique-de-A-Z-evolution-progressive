import React from 'react';
import ImagePersonnage from './ImagePersonnage/ImagePersonnage';
import CaracteristiquesPersonnage from './CaracPersonnage/CaracPersonnage';

const personnage = (props) => (
    <div className="row no-gutters">
        <div className="col-6">
            <ImagePersonnage
                numImage={props.image}
                flecheGauche={props.precedente}
                flecheDroite={props.suivante}
            />
        </div>
        <div className="col-6">
            <CaracteristiquesPersonnage 
                nombrePointsDisponibles = {props.nombrePointsDisponibles}
                force = {props.force}
                agilite = {props.agilite}
                intelligence = {props.intelligence}
                enleverPoint = {props.enleverPoint}
                ajouterPoint = {props.ajouterPoint}
            />
        </div>
    </div>
);

export default personnage;
