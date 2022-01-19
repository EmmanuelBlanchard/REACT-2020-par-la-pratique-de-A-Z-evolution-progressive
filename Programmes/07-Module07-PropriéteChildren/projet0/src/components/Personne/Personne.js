import React, {Component} from "react";
import classes from "./Personne.module.css";

class Personne extends Component {
    render() {
        // CSS Dynamique avec l'attribut style
        const monStyle = {
            color:"white",
            fontWeight:"bold"
        }
        monStyle.fontSize = "16px";

        if(this.props.sexe) {
            monStyle.backgroundColor = "#3D836D";
        } else {
            monStyle.backgroundColor = "#c8102E";
        }

        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                {this.props.children}
                <div style={monStyle}>Sexe : {this.props.sexe ? "Homme" : "Femme"}</div>
                
                <button onClick={this.props.clic}>Anniversaire</button>
            </>
        );
    } 
}

// Utilisation du système de propriété, props pour indiquer les propriétés que l'on récupère
// Syntaxe ES6
// const personne = props => {
//     return (
//         <>
//             <h1>{props.nom}</h1>
//             <div>Age : {props.age}</div>
//             <div>Sexe : {props.sexe}</div>
//         </>   
//     );
// }

export default Personne;
