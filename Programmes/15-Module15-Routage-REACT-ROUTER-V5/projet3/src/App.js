import React from 'react';
import PaysManager from './containers/PaysManager/PaysManager';
import UnPays from "./containers/UnPays/UnPays";
import {BrowserRouter,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
      <Route path="/pays" exact component={PaysManager} />
      <Route path="/pays/:id" render={(props) => <UnPays nomPays={props.match.params.id} {...props} />} />

    </BrowserRouter>
  );
}

export default App;
