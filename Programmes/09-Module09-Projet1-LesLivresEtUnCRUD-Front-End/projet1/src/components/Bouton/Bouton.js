import React from "react";

const bouton = (props) => {
    const btnCss = `btn ${props.typeCss}`;
    return (
        <button className={btnCss} onClick={props.clic}>{props.children}</button>
    );
};

export default bouton;
