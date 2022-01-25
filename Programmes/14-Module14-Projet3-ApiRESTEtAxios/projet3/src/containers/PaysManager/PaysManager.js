import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import axios from 'axios';
import Pays from './Pays/Pays';

/*
https://gitlab.com/amatos/rest-countries

About this Project

This project is inspired on restcountries.eu by Fayder Florez. Although the original project has now moved to a subscription base API, this project is still Open Source and Free to use.

https://restcountries.eu/rest/v2/all // Ne fonctionne pas
https://restcountries.com/v3.1/all
https://restcountries.com/v2/all
*/

class PaysManager extends Component {
    state = {
        listePays: [],
        loading : false,
        regionSelection: null,
        nombreDePays: null
    }

    componentDidMount = () => {
        this.handleSelectionPaysParRegion('all')
    }

    handleSelectionPaysParRegion = (region) => {
        let param='';
        if(region === 'all') param=region;
        else param=`region/${region}`;

        this.setState({loading:true});
        
        axios.get(`https://restcountries.com/v2/${param}`)
            .then(reponse => {
                console.log(reponse);
                const nombreDePays = reponse.data.length;
                const listePays = reponse.data.map(pays => {
                    // console.log(pays);
                    return {
                        nom : pays.name,
                        nomFrancais : pays.translations.fr,
                        capitale : pays.capital,
                        region : pays.region,
                        drapeau : pays.flag,
                    }
                })
                this.setState({
                    listePays,
                    loading:false,
                    regionSelection: region,
                    nombreDePays : nombreDePays
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
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("all")}
                    estSelection={this.state.regionSelection==="all"}
                    >Tous</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Europe")}
                    estSelection={this.state.regionSelection==="Europe"}
                    >Europe</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Africa")}
                    estSelection={this.state.regionSelection==="Africa"}
                    >Afrique</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Asia")}
                    estSelection={this.state.regionSelection==="Asia"}
                    >Asie</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Americas")}
                    estSelection={this.state.regionSelection==="Americas"}
                    >Amérique</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Oceania")}
                    estSelection={this.state.regionSelection==="Oceania"}
                    >Océanie</Bouton>
                <Bouton 
                    typeBtn="btn-info" 
                    clic={() => this.handleSelectionPaysParRegion("Polar")}
                    estSelection={this.state.regionSelection==="Polar"}
                    >Arctique</Bouton>
                <div className="d-inline m-3">Nombre de pays : <span className="badge bg-success">{this.state.nombreDePays}</span> 
                </div>
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
