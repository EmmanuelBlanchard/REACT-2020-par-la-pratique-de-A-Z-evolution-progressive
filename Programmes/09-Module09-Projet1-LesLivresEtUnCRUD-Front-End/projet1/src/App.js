import React, {Component} from 'react';
import TitreH1 from './components/Titres/TitreH1';
import Bouton from './components/Bouton/Bouton';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitreH1>
          Page listant les livres
        </TitreH1>
        <div>Livres</div>
        <Bouton typeCss="btn-success" clic={ () => console.log("Ajout")}>Ajouter</Bouton>
        <Bouton typeCss="btn-warning" clic={ () => console.log("Modifier")}>Modification</Bouton>
        <Bouton typeCss="btn-danger" clic={ () => console.log("Supprimer")}>Suppression</Bouton>
      </div>
    );
  }
}

export default App;
