import React from 'react';
import PaysManager from './containers/PaysManager/PaysManager';
import {BrowserRouter,Route,Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/" >Page d'accueil</Link> <br />
      <Link to="/pays" >Les pays</Link>
      <Route path="/" exact render={() => <h1>Page d'accueil</h1>} />
      <Route path="/pays" exact component={PaysManager} />
    </BrowserRouter>
  );
}

export default App;
