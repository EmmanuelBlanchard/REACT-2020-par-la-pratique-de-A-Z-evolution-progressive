import React, {Component} from 'react';
import Livre from './Livre/Livre';

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"L'algorithmique selon H2PROG", auteur:"Matthieu GASTON", nombreDePages:200},
            {id:2, titre:"La France du 19ème", auteur: "Albert PATRICK", nombreDePages: 500},
            {id:3, titre:"Le monde des animaux", auteur: "Marc MERLIN", nombreDePages: 250},
            {id:4, titre:"Le Virus d'Asie", auteur: "Tya MILO", nombreDePages: 120},
        ]
    }

    render() {
        return (
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
                                    />
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default Livres;
