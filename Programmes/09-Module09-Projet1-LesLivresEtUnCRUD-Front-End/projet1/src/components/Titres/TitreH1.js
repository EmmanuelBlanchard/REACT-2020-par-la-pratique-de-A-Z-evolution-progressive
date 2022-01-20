import React from "react";

const titreH1 = (props) => (
    <h1 className="border border-dark p-3 m-3 bg-primary text-white text-center rounded">{props.children}</h1>
    /* <h1 className="border border-dark p-3 m-3 bg-primary text-white text-center rounded">{props.texte}</h1> */
);

export default titreH1;