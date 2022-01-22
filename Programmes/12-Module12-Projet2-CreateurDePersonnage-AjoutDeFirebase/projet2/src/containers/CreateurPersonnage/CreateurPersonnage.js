import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import Personnage from './Personnage/Personnage';
import Armes from './Armes/Armes';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0,
            arme:null
        },
        nombrePointsDisponibles : 7,
        armes : ["epee","fleau","arc","hache"]
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
            armes : ["epee","fleau","arc","hache"]
        })
    }
    
    handleValidation = () => {
        alert("Personnage créé");
    }

    render() {
        return (
            <div className="container">
                <TitreH1>Créateur de personnage</TitreH1>
                <Personnage 
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nombrePointsDisponibles={this.state.nombrePointsDisponibles}
                    enleverPoint={this.handleEnleverPoint}
                    ajouterPoint={this.handleAjouterPoint}
                />
                <Armes 
                    listeArmes={this.state.armes}
                    changeArme={this.handleChangeArmePersonnage}
                    currentArme={this.state.personnage.arme}
                />
                <div className="row no-gutters">
                    <Bouton typeBtn="btn-danger" css="col-6" clic={this.handleReinitialisation}>Réinitialiser</Bouton>
                    <Bouton typeBtn="btn-success" css="col-6" clic={this.handleValidation}>Créer</Bouton>
                </div>
            </div>
        );
    }
}

export default CreateurPersonnage;
