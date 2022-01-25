import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';

class PaysManager extends Component {
    render() {
        return (
            <div className="container">
                <TitreH1>Liste des pays du monde</TitreH1>
                <Bouton typeBtn="btn-info">Tous</Bouton>
                <Bouton typeBtn="btn-info">Europe</Bouton>
                <Bouton typeBtn="btn-info">Afrique</Bouton>
                <Bouton typeBtn="btn-info">Asie</Bouton>
                <Bouton typeBtn="btn-info">Amérique</Bouton>
                <Bouton typeBtn="btn-info">Océanie</Bouton>
                <div>Pays</div>
                <div>Pagination</div>
            </div>
        );
    }
}

export default PaysManager;
