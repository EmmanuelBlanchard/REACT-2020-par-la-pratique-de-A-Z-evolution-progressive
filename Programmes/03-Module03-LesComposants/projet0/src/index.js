// Le fichier index.js va faire le lien avec le fichier index.html présent dans public/index.html
// Le fichier index.js permettra de prendre toute notre application et la positionnera dans la balise <div id="root"></div>

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    // Code JS
    // React.createElement("h1",null,"Hello World !"),
    // document.getElementById("root")
    // Code JSX
    <App />, 
    document.getElementById("root")
);
