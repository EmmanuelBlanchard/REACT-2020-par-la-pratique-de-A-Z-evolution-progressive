import React, {Component} from 'react';
import Accueil from './Accueil/Accueil';
import Localisation from './Localisation/Localisation.js';
import Contact from './Contact/Contact';
import NavBar from '../../components/UI/NavBar/NavBar';
import {Route,Switch} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Route404 from '../../components/Route404/Route404';
import Footer from '../../components/Footer/Footer';

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <NavBar />
                    <Container>
                        <Switch>
                            <Route path="/" exact render={() => <Accueil />} />
                            <Route path="/localisation" component={() => <Localisation />} />
                            <Route path="/contact" render={() => <Contact />} />
                            <Route render={() => <Route404 />} />
                        </Switch>                    
                    </Container>
                    <div className="minSite"></div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Site;
