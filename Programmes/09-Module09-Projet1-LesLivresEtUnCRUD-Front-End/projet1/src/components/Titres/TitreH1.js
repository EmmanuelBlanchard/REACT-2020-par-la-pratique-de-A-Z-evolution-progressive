import React from "react";
import classes from "./TitreH1.module.css";

const titreH1 = (props) => {
    const monCss = `${classes.policeTitreH1} border border-dark p-3 m-3 bg-primary text-white text-center rounded`;
    return (
        <h1 className={monCss}>{props.children}</h1>
    );
};

export default titreH1;
