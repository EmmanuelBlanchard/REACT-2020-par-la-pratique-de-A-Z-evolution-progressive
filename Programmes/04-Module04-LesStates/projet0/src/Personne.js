import React, {Component} from "react";
import AgePersonne from "./AgePersonne";

class Personne extends Component {
    render() {
        return (
            <>
                <h1>{this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div>Sexe : {this.props.sexe}</div>
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
