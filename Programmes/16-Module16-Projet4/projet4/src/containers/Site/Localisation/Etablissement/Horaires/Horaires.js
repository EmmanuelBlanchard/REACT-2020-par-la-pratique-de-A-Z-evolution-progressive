import React from 'react';

const horaires = (props) => {
    let content = props.horaires.map((horaire,index) => {
        return <li key={index}>Du {horaire.du} au {horaire.au} - De {horaire.heures[0].de.substring(0, 5)} à {horaire.heures[0].a.substring(0, 5)} </li>
    });
    
    return (
        <>  
            <ul>
                {content}
            </ul>
        </>
    );
};

export default horaires;
