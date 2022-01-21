import React, {Component} from 'react';
import Livre from './Livre/Livre';
import FormulaireAjoutLivre from './FormulaireAjoutLivre/FormulaireAjoutLivre';
import FormulaireModificationLivre from './FormulaireModificationLivre/FormulaireModificationLivre';
import Alert from '../../components/Alert/Alert';

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nombreDePages:200},
            {id:3, titre:"La France du 19ème", auteur: "Albert PATRICK", nombreDePages: 500},
            {id:5, titre:"Le monde des animaux", auteur: "Marc MERLIN", nombreDePages: 250},
            {id:8, titre:"Le Virus d'Asie", auteur: "Tya MILO", nombreDePages: 120},
        ],
        lastIdLivre : 8,
        idLivreAModifier : 0,
        alertMessage : null
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(livre => {
            return livre.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({
            livres:newLivres,
            alertMessage: {
                message : "Suppression du livre effectuée",
                type : "alert-danger"
            }
        });
    }

    handleAjoutLivre = (titre,auteur,nombreDePages) => {
        const newLivre = {
            id: this.state.lastIdLivre + 1, 
            titre: titre, 
            auteur: auteur, 
            nombreDePages: nombreDePages
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState(oldState => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1,
                alertMessage: {
                    message : "Ajout du livre effectuée",
                    type : "alert-success"
                }
            }
        })
        this.props.fermerAjoutLivre();
    }

    handleModificationLivre = (id,titre,auteur,nombreDePages) => {
        const caseLivre = this.state.livres.findIndex(livre => {
            return livre.id === id;
        });

        const newLivre = {id,titre,auteur,nombreDePages};

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres : newListe,
            idLivreAModifier : 0,
            alertMessage: {
                message : "Modification du livre effectuée",
                type : "alert-warning"
            }
        })
    }

    render() {
        return (
            <>
                {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                if(livre.id !== this.state.idLivreAModifier) {
                                    return (
                                        <tr key={livre.id}>
                                            <Livre 
                                                titre={livre.titre}
                                                auteur={livre.auteur}
                                                nombreDePages={livre.nombreDePages}
                                                suppression={ () => this.handleSuppressionLivre(livre.id)}
                                                modification={ () => this.setState({idLivreAModifier:livre.id})}
                                            />
                                        </tr>
                                    );
                                } else {
                                    return (
                                        <tr key={livre.id}>
                                            <FormulaireModificationLivre 
                                            id={livre.id}
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nombreDePages={livre.nombreDePages}
                                            validationModification={this.handleModificationLivre}
                                            />
                                        </tr>
                                    );
                                }
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjoutLivre validation={this.handleAjoutLivre}/>}
            </>
        );
    }
}

export default Livres;
