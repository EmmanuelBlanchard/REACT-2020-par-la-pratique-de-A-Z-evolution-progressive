import React from 'react';
import TitreH1 from "./components/Titres/TitreH1";
import Bouton from "./components/Bouton/Bouton";

function App() {
  return (
    <div className="container">
      <TitreH1>Créateur de personnage</TitreH1>
      <div>Personnage</div>
      <div>Armes</div>
      <div className="row no-gutters">
        <Bouton typeBtn="btn-danger" css="col-6" clic={() => console.log("Réinitialisation")}>Réinitialiser</Bouton>
        <Bouton typeBtn="btn-success" css="col-6" clic={() => console.log("Création")}>Créer</Bouton>
      </div>
    </div>
  );
}

export default App;
