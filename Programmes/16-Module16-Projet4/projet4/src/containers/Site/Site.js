import React, {Component} from 'react';
import Accueil from './Accueil/Accueil';
import Localisation from './Localisation/Localisation.js';
import Contact from './Contact/Contact';
import NavBar from '../../components/UI/NavBar/NavBar';

class Site extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Accueil />
                <Localisation />
                <Contact />
            </div>
        );
    }
}

export default Site;
