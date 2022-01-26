import React from 'react';

const erreur = (props) => (
    <div className="alert alert-danger m-3">
        {props.children}
    </div>
);

export default erreur;
