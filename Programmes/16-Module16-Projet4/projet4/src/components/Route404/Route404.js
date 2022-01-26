import React from 'react';
import TitreH1 from '../UI/Titres/TitreH1';

const route404 = (props) => (
    <>
        <TitreH1>Erreur 404 !</TitreH1>
        <p className='m-3'>La page n'existe pas ! </p>
    </>
);

export default route404;
