import React, {Component} from 'react';
import Bouton from '../../components/Bouton/Bouton';

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
                                    <td>{livre.titre}</td>
                                    <td>{livre.auteur}</td>
                                    <td>{livre.nombreDePages}</td>
                                    <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
                                    <td><Bouton typeBtn="btn-danger" clic={() => console.log("suppression")}>Supprimer</Bouton></td>
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
