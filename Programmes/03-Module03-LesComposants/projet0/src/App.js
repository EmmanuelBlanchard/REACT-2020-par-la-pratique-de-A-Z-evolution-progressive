// Importer react pour pouvoir utiliser du code JSX
// Utilisation du destructuring pour recuperer la partie Component à l'intérieur du module React
import React, {Component} from 'react';

//Fonction qui retourne du code JSX (Composant App)
function App() {
    return (
        <>
            <h1>Hello World !</h1>
            <p>Mon prénom est Matthieu</p>
        </>   
    );
}

// Transformation de la fonction app() en classe App()
// extends => donne accès aux attributs et fonctions de la classe "mère" 
// class App extends Component {
//     // Lors de la creation d'une classe, implementer la fonction render pour l'affichage 
//     render() {
//         return <h1>Hello World !</h1>;
//     }
// }

export default App;
