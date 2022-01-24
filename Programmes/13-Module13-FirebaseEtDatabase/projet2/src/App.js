import React, {Component} from 'react';
import CreateurPersonnage from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnage from './containers/ListePersonnage/ListePersonnage';

class App extends Component {
  state = {
    refresh: false
  }

  render () {
    return (
      <>
        <CreateurPersonnage />
        <ListePersonnage />
      </>
    );
  }
}

export default App;
