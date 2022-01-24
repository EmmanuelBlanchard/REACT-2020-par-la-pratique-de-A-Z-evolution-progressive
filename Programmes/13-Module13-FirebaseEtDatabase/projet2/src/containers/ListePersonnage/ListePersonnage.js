import React, {Component} from 'react';
import axios from 'axios';
import TitreH1 from '../../components/Titres/TitreH1';
import Personnage from './Personnage/Personnage';

class ListePersonnage extends Component {
    state = {
        personnages : null,
        loading: false,
    }

    componentDidMount = () => {
        this.setState({loading:true});
        axios.get("https://projet2-createurdepersonnage-default-rtdb.europe-west1.firebasedatabase.app/personnages.json")
            .then(reponse => {
                const personnages = Object.values(reponse.data);
                this.setState({
                    personnages,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
            })
    }

    render() {
        return (
            <>
                {this.state.loading && <div>Chargement ...</div>}
                {!this.state.loading && this.state.personnages && 
                    <div className="row no-gutters">
                        {this.state.personnages.map((perso,indice) => {
                            return (
                                <div className="col-6" key={indice}>
                                    <TitreH1>{perso.nom}</TitreH1>
                                    <Personnage {...perso.perso}/>
                                </div>
                            );
                        })}
                    </div>
                }
            </>
        );
    }
}

export default ListePersonnage;