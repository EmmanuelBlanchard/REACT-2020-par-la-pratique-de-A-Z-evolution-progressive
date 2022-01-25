import React from 'react';
import PaysManager from './containers/PaysManager/PaysManager';
import {BrowserRouter,Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
      <Route path="/pays" exact component={PaysManager} />
    </BrowserRouter>
  );
}

export default App;
