import React, {Component} from 'react';
import Bouton from '../../../components/Bouton/Bouton';

class FormulaireModificationLivre extends Component {
    state = {
        titreSaisi : "",
        auteurSaisi : "",
        nombreDePagesSaisi : ""
    }

    componentDidMount = () =>{
        this.setState({
            titreSaisi:this.props.titre,
            auteurSaisi:this.props.auteur,
            nombreDePagesSaisi:this.props.nombreDePages,
        })
    }

    handleValidation = () => {
        this.props.validationModification(this.props.id,this.state.titreSaisi,this.state.auteurSaisi,this.state.nombreDePagesSaisi);
    }
    
    render() {
        return (
            <>
                <td><input type="text" className="form-control" value={this.state.titreSaisi} onChange={(event) => this.setState({titreSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.auteurSaisi} onChange={(event) => this.setState({auteurSaisi:event.target.value})}/></td>
                <td><input type="text" className="form-control" value={this.state.nombreDePagesSaisi} onChange={(event) => this.setState({nombreDePagesSaisi:event.target.value})}/></td>
                <td><Bouton typeBtn="btn-primary" clic={this.handleValidation}>Valider</Bouton></td>
            </>
        );
    }
}

export default FormulaireModificationLivre;