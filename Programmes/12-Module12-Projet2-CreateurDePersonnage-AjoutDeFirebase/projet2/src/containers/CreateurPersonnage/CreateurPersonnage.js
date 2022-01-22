import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0
        },
        nombrePointsDisponibles : 7
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
                <div>Armes</div>
                <div className="row no-gutters">
                    <Bouton typeBtn="btn-danger" css="col-6" clic={ () => console.log("Réinitialisation")}>Réinitialiser</Bouton>
                    <Bouton typeBtn="btn-success" css="col-6" clic={ () => console.log("Création")}>Créer</Bouton>
                </div>
            </div>
        );
    }
}

export default CreateurPersonnage;
