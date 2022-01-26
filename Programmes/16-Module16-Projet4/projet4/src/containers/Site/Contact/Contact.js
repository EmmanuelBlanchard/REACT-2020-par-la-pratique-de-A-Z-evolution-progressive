import React, {Component} from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import ContactForm from './ContactForm/ContactForm';
import {Route} from 'react-router-dom';

class Contact extends Component {
    render() {
        // console.log(this.props);
        return (
            <>
                <TitreH1>Contactez-nous !</TitreH1>
                <div>
                    <h2>Adresse : </h2>
                    xxxxxxxxxxxxx
                    <h2>Téléphone : </h2>
                    00 00 00 00 00
                </div>
                <h2>Vous préfèrez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path + "/form"}>
                    <Button variant="primary">Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm />} />
            </>
        );
    }
}

export default Contact;
