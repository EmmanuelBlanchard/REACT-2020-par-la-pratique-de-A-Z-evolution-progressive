// Le fichier index.js va faire le lien avec le fichier index.html présent dans public/index.html
// Le fichier index.js permettra de prendre toute notre application et la positionnera dans la balise <div id="root"></div>

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render("Hello World !", document.getElementById("root"));
