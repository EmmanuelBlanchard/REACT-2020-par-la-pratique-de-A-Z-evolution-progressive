import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import Personnage from './Personnage/Personnage';
import Armes from './Armes/Armes';
import axios from 'axios';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0,
            arme: null
        },
        nombrePointsDisponibles : 7,
        armes : null,
        loading: false,
        nom : "",
    }

    componentDidMount = () => {
        this.setState({loading:true});
        axios.get("https://projet2-createurdepersonnage-default-rtdb.europe-west1.firebasedatabase.app/armes.json")
            .then(reponse => {
                const armesArray = Object.values(reponse.data);
                this.setState({
                    armes:armesArray,
                    loading:false,
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loading:false,
                });
            })
    }

    handleImagePrecedente = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage};
            if(oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image --;
            return {personnage:newPersonnage};
        })
    }

    handleImageSuivante = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage};
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image ++;
            return {personnage:newPersonnage};
        })
    }

    handleEnleverPoint = (caracteristique) => {
        this.setState((oldState,props) => {
            if(oldState.personnage[caracteristique] <= 0 || oldState.nombrePointsDisponibles >= 7) return null;
            const newPointCaracteristique = oldState.personnage[caracteristique] - 1;
            const newPersonnage = {...oldState.personnage};
            const newNombrePointsDisponible = oldState.nombrePointsDisponibles + 1;
            newPersonnage[caracteristique] = newPointCaracteristique;
            return {
                personnage:newPersonnage,
                nombrePointsDisponibles : newNombrePointsDisponible
            }
        })
    }
    
    handleAjouterPoint = (caracteristique) => {
        this.setState((oldState,props) => {
            if(oldState.personnage[caracteristique] >= 5 || oldState.nombrePointsDisponibles <= 0) return null;
            const newPointCaracteristique = oldState.personnage[caracteristique] + 1;
            const newPersonnage = {...oldState.personnage};
            const newNombrePointsDisponible = oldState.nombrePointsDisponibles - 1;
            newPersonnage[caracteristique] = newPointCaracteristique;
            return {
                personnage:newPersonnage,
                nombrePointsDisponibles : newNombrePointsDisponible
            }
        })
    }

    handleChangeArmePersonnage = (arme) => {
        const newPersonnage = {...this.state.personnage};
        newPersonnage.arme = arme;
        this.setState({personnage:newPersonnage});
    }
    
    handleReinitialisation = () => {
        this.setState({
            personnage : {
                image : 1,
                force : 0,
                agilite : 0,
                intelligence : 0,
                arme:null
            },
            nombrePointsDisponibles : 7,
            armes : ["epee","fleau","arc","hache"],
            loading: false,
            nom : "",
        })
    }
    
    handleValidation = () => {
        this.setState({loading:true});
        const player = {
            perso: {...this.state.personnage},
            nom: this.state.nom
        }
        axios.post("https://projet2-createurdepersonnage-default-rtdb.europe-west1.firebasedatabase.app/personnages.json",player)
            .then(reponse => {
                console.log(reponse);
                this.setState({loading:false});
                this.handleReinitialisation();
                this.props.refresh();
            })
            .catch(error => {
                console.log(error);
                this.setState({loading:false});
                this.handleReinitialisation();
            })
    }

    render() {
        return (
            <div className="container">
                <TitreH1>Cr??ateur de personnage</TitreH1>
                {
                    this.state.loading && <div>Chargement...</div>
                }
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Nom : </label>
                    <input type="text" className="form-control" id="inputName" value={this.state.nom} onChange={event => this.setState({nom:event.target.value})} />
                </div>
                <Personnage 
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nombrePointsDisponibles={this.state.nombrePointsDisponibles}
                    enleverPoint={this.handleEnleverPoint}
                    ajouterPoint={this.handleAjouterPoint}
                />
                {
                    this.state.armes &&
                    <Armes 
                        listeArmes={this.state.armes}
                        changeArme={this.handleChangeArmePersonnage}
                        currentArme={this.state.personnage.arme}
                    />
                }
                <div className="row no-gutters">
                    <Bouton typeBtn="btn-danger" css="col-6" clic={this.handleReinitialisation}>R??initialiser</Bouton>
                    <Bouton typeBtn="btn-success" css="col-6" clic={this.handleValidation}>Cr??er</Bouton>
                </div>
            </div>
        );
    }
}

export default CreateurPersonnage;
