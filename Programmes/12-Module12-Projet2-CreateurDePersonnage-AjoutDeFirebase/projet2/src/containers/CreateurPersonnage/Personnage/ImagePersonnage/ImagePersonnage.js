import React from 'react';
import ImagePersonnage1 from '../../../../assets/images/persos/player1.png';
import ImagePersonnage2 from '../../../../assets/images/persos/player2.png';
import ImagePersonnage3 from '../../../../assets/images/persos/player3.png';

const imagePersonnage = (props) => {
    let imageToPrint="";
    if(props.numImage === 1) imageToPrint = ImagePersonnage1;
    else if(props.numImage === 2) imageToPrint = ImagePersonnage2;
    else if(props.numImage === 3) imageToPrint = ImagePersonnage3;

    return (
        <div>
            <img src={imageToPrint} alt='perso'/>
        </div>
    );
};

export default imagePersonnage;
