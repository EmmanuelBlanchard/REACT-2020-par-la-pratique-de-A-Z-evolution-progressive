import React, {Component} from "react";
import AgePersonne from "./AgePersonne/AgePersonne";
import classes from "./Personne.module.css";

class Personne extends Component {
    render() {
        // CSS Dynamique avec l'attribut style
        const monStyle = {
            color:"#3D836D",
            fontWeight:"bold"
        }
        monStyle.fontSize = "16px";

        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div style={monStyle}>Sexe : {this.props.sexe}</div>
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
