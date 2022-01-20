import React, {Component} from 'react';
import Bouton from '../../components/Bouton/Bouton';

class Livres extends Component {
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
                    <tr>
                        <td>Titre 1</td>
                        <td>Auteur 1</td>
                        <td>200 pages</td>
                        <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
                        <td><Bouton typeBtn="btn-danger" clic={() => console.log("suppression")}>Supprimer</Bouton></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Livres;
