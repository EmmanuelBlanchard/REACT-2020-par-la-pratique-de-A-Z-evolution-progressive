import React from 'react';

const arme = (props) => (
    <div>
        <div>
            <img src={props.imageArme} alt={props.children} />
        </div>
        <div>
            {props.children}
        </div> 
    </div>
);

export default arme;
