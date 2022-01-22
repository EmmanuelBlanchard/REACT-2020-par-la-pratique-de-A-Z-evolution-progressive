import React from 'react';

const caracPersonnage = (props) => (
    <>
        <div>
            Points restants :  
            <span className="badge bg-success mx-2">
                {props.nombrePointsDisponibles}
            </span>
        </div>
        <div>
            Force : {props.force} <br />
            Agilite : {props.agilite} <br />
            Intelligence : {props.intelligence}
        </div>
    </>
);

export default caracPersonnage;