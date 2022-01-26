import React, {Component} from 'react';
import Accueil from './Accueil/Accueil';
import Localisation from './Localisation/Localisation.js';
import Contact from './Contact/Contact';
import NavBar from '../../components/UI/NavBar/NavBar';
import {Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class Site extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Container>
                    <Route path="/" exact render={() => <Accueil />} />
                    <Route path="/localisation" component={() => <Localisation />} />
                    <Route path="/contact" render={() => <Contact />} />
                </Container>
            </>
        );
    }
}

export default Site;
