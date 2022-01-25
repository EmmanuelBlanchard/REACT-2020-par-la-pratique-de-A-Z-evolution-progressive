import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import axios from 'axios';
import Pays from './Pays/Pays';

class PaysManager extends Component {
    state = {
        listePays: [],
        loading : false
    }

    componentDidMount = () => {
        this.setState({loading:true});
        // https://restcountries.eu/rest/v2/all // Ne fonctionne pas
        // https://restcountries.com/v3.1/all
        // https://restcountries.com/v2/all
        axios.get("https://restcountries.com/v2/all")
            .then(reponse => {
                // console.log(reponse);
                const listePays = reponse.data.map(pays => {
                    // console.log(pays);
                    return {
                        nom : pays.name,
                        nomFrancais : pays.translations.fr,
                        capitale : pays.capital,
                        region : pays.region,
                        drapeau : pays.flag
                    }
                })
                this.setState({
                    listePays,
                    loading:false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

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
                {
                    this.state.loading 
                    ? <div>Chargement...</div>
                    : <div className="row no-gutters">
                        {this.state.listePays.map(pays => {
                            return (
                                <div className="col-12 col-md-6" key={pays.nom}>
                                    <Pays {...pays}/>
                                </div>
                            );
                        })}
                    </div>
                }
                <div>Pagination</div>
            </div>
        );
    }
}

export default PaysManager;
