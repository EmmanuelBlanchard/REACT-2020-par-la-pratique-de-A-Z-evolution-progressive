import React from "react";
import Bouton from "../../../components/Bouton/Bouton";

const livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nombreDePages}</td>
        <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" clic={() => console.log("suppression")}>Supprimer</Bouton></td>
    </>
);

export default livre;
