import React, {Component} from 'react';
import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nombreDePages:200},
            {id:3, titre:"La France du 19ème", auteur: "Albert PATRICK", nombreDePages: 500},
            {id:5, titre:"Le monde des animaux", auteur: "Marc MERLIN", nombreDePages: 250},
            {id:8, titre:"Le Virus d'Asie", auteur: "Tya MILO", nombreDePages: 120},
        ]
    }

    handleSuppressionLivre = (id) => {
        const livreIndexTab = this.state.livres.findIndex(livre => {
            return livre.id === id;
        })

        const newLivres = [...this.state.livres];
        newLivres.splice(livreIndexTab,1);

        this.setState({livres:newLivres});
    }

    handleAjoutLivre = (titre, auteur, nombreDePages) => {
        console.log(titre);
        console.log(auteur);
        console.log(nombreDePages);
    }

    render() {
        return (
            <>
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
                                return (
                                    <tr key={livre.id}>
                                        <Livre 
                                            titre={livre.titre}
                                            auteur={livre.auteur}
                                            nombreDePages={livre.nombreDePages}
                                            suppression={ () => this.handleSuppressionLivre(livre.id)}
                                        />
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                {this.props.ajoutLivre && <FormulaireAjout validation={this.handleAjoutLivre}/>}
            </>
        );
    }
}

export default Livres;
