// Importer react pour pouvoir utiliser du code JSX
// Utilisation du destructuring pour recuperer la partie Component à l'intérieur du module React
import React, {Component} from 'react';
import Personne from './components/Personne/Personne';
import Horloge from "./containers/Horloge/Horloge";
import "./App.css";

class App extends Component {
    state = {
        personnes : [
            {nom : "Matthieu", age : 31, sexe: true},
            {nom : "Tya", age : 25, sexe: false},
            {nom : "Milo", age : 43, sexe: true},
        ]
    }

    anniversaireHandler = (numeroPersonne) => {
        // Recuperer la personne concernée 
        const newPersonne = {...this.state.personnes[numeroPersonne]}; // Génére une copie de la personne sur laquelle on a cliqué
        newPersonne.age++; // Augmente l'age de la personne copiée
        const newTab = [...this.state.personnes]; // On duplique le tableau de personnes
        newTab[numeroPersonne] = newPersonne; // On remplace la personne à l'indice du tableau sur lequel on a cliqué par la nouvelle personne qu'on a crée
        // On remplace dans le state, le tableau de personnes par Le nouveau tableau newTab
        this.setState({personnes: newTab});
    }

    // Pour augmenter l'anniversaire de tous les personnes
    anniversairesHandler = () => {
        // Immutabilité des données dans le state de personnes, nouveau tableau
        // const newPersonnes = this.state.personnes.slice();
        // const newPersonnes = [...this.state.personnes];
        // for(let i = 0 ; i < newPersonnes.length ; i++) {
        //     newPersonnes[i].age ++;
        // }
        // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        const newPersonnes = this.state.personnes.map(personne => {
            return {
                nom: personne.nom,
                age: personne.age + 1,
                sexe: personne.sexe
            };
        })
        // Le nouveau tableau newPersonnes peut remplacer celui que l'on a dans le state
        this.setState({personnes: newPersonnes});
    }

    // Envoyer toutes les propriétés de la liste de personnes du state => utilisation de l'opérateur spread : <Personne {...this.state.personnes[0]}/>
    // Envoyer que certaines propriétés de la liste de personnes du state : <Personne nom={this.state.personnes[1].nom} age={this.state.personnes[1].age} sexe={this.state.personnes[1].sexe}/>
    render() {
        return (
            <>
                <button onClick={this.anniversairesHandler}>Anniversaire</button>
                <Horloge />
                <Personne {...this.state.personnes[0]} clic={() => this.anniversaireHandler(0)}/>
                <Personne {...this.state.personnes[1]} clic={this.anniversaireHandler.bind(this,1)}/>
                <Personne {...this.state.personnes[2]} clic={() => this.anniversaireHandler(2)}/>
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
