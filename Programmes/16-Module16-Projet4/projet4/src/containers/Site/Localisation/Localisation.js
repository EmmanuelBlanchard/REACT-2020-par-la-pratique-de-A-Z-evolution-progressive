import React, {Component} from 'react';
import axios from 'axios';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Button from 'react-bootstrap/Button';

class Localisation extends Component {
    state = {
        recherche : null
    }

    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/79/${type}`)
            .then(response => {
                console.log(response.data);
                this.setState({recherche:response.data})
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
            </>
        );
    }
}

export default Localisation;
