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
        loading: false,
        regionSelection: null,
        numeroDePageActuel: 1,
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
                // console.log(reponse);
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
                    numeroDePageActuel: 1
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

    render() {
        let pagination = [];
        let listePays = "";
        if(this.state.listePays) {
            let fin = this.state.listePays.length/10;
            if(this.state.listePays.length % 10 !== 0) fin++;
            for(let i = 1 ; i <= fin ; i++) {
                pagination.push(
                    <Bouton 
                        key={i} 
                        typeBtn="btn-info" 
                        css="m-1"
                        estSelection={this.state.numeroDePageActuel===i}
                        clic={() => this.setState({numeroDePageActuel:i})}
                        >{i}</Bouton>
                );
            }

            const debutListe = (this.state.numeroDePageActuel-1)*10; 
            // 0 * 10 = 0 / 1 * 10 = 10 / 2 * 10 = 20
            // const finListe = (this.state.numeroDePageActuel-1)*10 + 10; 
            // 0 * 10 + 10 = 10 / 1* 10 + 10 = 20 / 2 * 10 + 10 = 30
            const finListe = this.state.numeroDePageActuel*10;
            const listeReduite = this.state.listePays.slice(debutListe,finListe);
            listePays = listeReduite.map(pays => {
                    return (
                        <div className="col-12 col-md-6" key={pays.nom}>
                            <Pays {...pays}/>
                        </div>
                    );
                })
        }

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
                <div className="d-inline m-3">Nombre de pays : <span className="badge bg-success">{this.state.listePays.length}</span> 
                </div>
                {
                    this.state.loading 
                    ? <div>Chargement...</div>
                    : <div className="row no-gutters">
                        {listePays}
                    </div>
                }
                <div className="d-flex align-items-center justify-content-center">{pagination}</div>
            </div>
        );
    }
}

export default PaysManager;
