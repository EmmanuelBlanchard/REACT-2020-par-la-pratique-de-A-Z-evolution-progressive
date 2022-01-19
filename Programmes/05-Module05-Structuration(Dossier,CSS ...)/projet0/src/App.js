// Importer react pour pouvoir utiliser du code JSX
// Utilisation du destructuring pour recuperer la partie Component à l'intérieur du module React
import React, {Component} from 'react';
import Personne from './components/Personne/Personne';
import Horloge from "./containers/Horloge/Horloge";
import "./App.css";

class App extends Component {
    render() {
        return (
            <>
                <Horloge />
                <Personne nom="Matthieu" age="31" sexe="Homme"/>
                <Personne nom="Tya" age="25" sexe="Femme"/>
                <Personne nom="Milo" age="43" sexe="Homme"/>
            </>
        );
    }
}

//Fonction qui retourne du code JSX (Composant App)
// function App() {
//     return (
//         <>
//             <Personne />
//             <Personne />
//             <Personne />
//         </>
//     );
// }

// Transformation de la fonction app() en classe App()
// extends => donne accès aux attributs et fonctions de la classe "mère"
// Lors de la creation d'une classe, implementer la fonction render pour l'affichage  
// class App extends Component {
//     render() {
//         return <h1>Hello World !</h1>;
//     }
// }

export default App;
