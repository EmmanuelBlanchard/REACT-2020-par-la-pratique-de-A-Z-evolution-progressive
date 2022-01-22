import React from 'react';
import ImagePersonnage from './ImagePersonnage/ImagePersonnage';

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
            Force : {props.force} <br />
            Agilite : {props.agilite} <br />
            Intelligence : {props.intelligence}
        </div>
    </div>
);

export default personnage;
