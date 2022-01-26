import React from 'react';
import PaysManager from './containers/PaysManager/PaysManager';
import UnPays from './containers/UnPays/UnPays';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Erreur from './components/Erreur/Erreur';
import Erreur404 from './components/Erreur/Erreur404/Erreur404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
        <Route path="/pays" exact component={PaysManager} />
        <Route path="/pays/:id" render={(props) => <UnPays nomPays={props.match.params.id} {...props} />} />
        <Route render={() => <Erreur><Erreur404 /></Erreur>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
