import React from 'react';

const titreH1 = (props) => {
    const classesCss = `border border-dark p-3 m-3 bg-primary text-white text-center rounded`;
    return (
        <h1 className={classesCss}>{props.children}</h1>
    );
};

export default titreH1;
