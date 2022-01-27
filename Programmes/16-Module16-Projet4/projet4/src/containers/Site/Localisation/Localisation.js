import React, {Component} from 'react';
import axios from 'axios';
import Etablissement from './Etablissement/Etablissement';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Localisation extends Component {
    state = {
        recherche : null
    }

    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/79/${type}`)
            .then(response => {
                // console.log(response.data);
                // console.log(response.data.features);
                this.setState({recherche:response.data.features})
            })
    }

    render() {
        return (
            <>
                <TitreH1>Rechercher un établissement : </TitreH1>
                <Button variant="secondary" className='m-2' onClick={() => this.rechercheEtablissement('mairie')}>Mairie</Button>
                <Button variant="secondary" className='m-2' onClick={() => this.rechercheEtablissement('commissariat_police')}>Commisariat de police</Button>
                <Button variant="secondary" className='m-2' onClick={() => this.rechercheEtablissement('pole_emploi')}>Pôle emploi</Button>
                <Button variant="secondary" className='m-2' onClick={() => this.rechercheEtablissement('prefecture')}>Préfecture</Button>
                <Row>
                    {this.state.recherche && this.state.recherche.map(etablissement => {
                        return (
                            <Col md={6} key={etablissement.properties.id}>
                                <Etablissement 
                                    adresses={etablissement.properties.adresses}
                                    horaires={etablissement.properties.horaires}
                                    id={etablissement.properties.id}
                                    nom={etablissement.properties.nom}
                                    telephone={etablissement.properties.telephone}
                                    email={etablissement.properties.email}
                                    url={etablissement.properties.url}
                                    />
                            </Col>
                        );
                    })}
                </Row>
            </>
        );
    }
}

export default Localisation;
