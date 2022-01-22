import React, {Component} from 'react';
import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import Personnage from './Personnage/Personnage';

class CreateurPersonnage extends Component {
    state = {
        personnage : {
            image : 1,
            force : 2,
            agilite : 3,
            intelligence : 1
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

    render() {
        return (
            <div className="container">
                <TitreH1>Créateur de personnage</TitreH1>
                <Personnage 
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nombrePointsDisponibles={this.state.nombrePointsDisponibles}
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
