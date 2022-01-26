import React from 'react';
import imageErreur404 from '../../../assets/images/error404.png';

const erreur404 = (props) => (
    <div className='text-center'>
        <img src={imageErreur404} alt="Erreur 404" width="300px;" />
        <div>La page demandée n'existe pas </div>
    </div>
);

export default erreur404;
