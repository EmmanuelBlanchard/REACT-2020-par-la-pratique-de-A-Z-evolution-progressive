import React, {Component} from 'react';
import Bouton from '../../../components/Bouton/Bouton';

class FormulaireAjout extends Component {
    state = {
        titreSaisi : "",
        auteurSaisi : "",
        nombreDePagesSaisi : ""
    }
    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{fontFamily:'Sigmar One'}}>Affichage du formulaire d'ajout</h2>
                <form>
                    <div className="mb-3">
                        <label for="titre">Titre du livre</label>
                        <input type="text" 
                            className="form-control" 
                            id="titre" 
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({titreSaisi:event.target.value})} 
                            />
                    </div>
                    <div className="mb-3">
                        <label for="auteur">Auteur</label>
                        <input type="text" className="form-control" id="auteur" 
                        value={this.state.auteurSaisi}
                        onChange={(event) => this.setState({auteurSaisi:event.target.value})} 
                        />
                    </div>
                    <div className="mb-3">
                        <label for="nombreDePages">Nombre de pages</label>
                        <input type="number" className="form-control" id="nombreDePages" 
                        value={this.state.nombreDePagesSaisi}
                        onChange={(event) => this.setState({nombreDePagesSaisi:event.target.value})} 
                        />
                    </div>
                    <Bouton typeBtn="btn-primary" css="mb-3">Valider</Bouton>
                </form>
            </>
        );
    }
}

export default FormulaireAjout;
