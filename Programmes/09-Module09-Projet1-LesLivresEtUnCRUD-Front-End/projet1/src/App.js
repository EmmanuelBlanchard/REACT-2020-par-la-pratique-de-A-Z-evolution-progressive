import React from 'react';
import TitreH1 from './components/Titres/TitreH1';

function App() {
  return (
      <div className="container">
        <TitreH1>
          Page listant les livres
        </TitreH1>
        {/* <TitreH1 texte="Page listant les livres" /> */}
        <div>Livres</div>
        <button>Ajouter</button>
      </div>
  );
}

export default App;
