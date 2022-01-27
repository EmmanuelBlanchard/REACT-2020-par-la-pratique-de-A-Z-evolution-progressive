import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Formations() {
    const [formations,setFormations] = useState(null);

    useEffect(() => {
        axios.get('https://dev.h2prog.com/API_TEST/formations')
        .then(reponse => {
            console.log(reponse.data);
            setFormations(reponse.data);
        })
        .catch(error => {
            console.log(error);
        })
    },[]);

    return (
        <div>
            <TitreH1>Bienvenue sur le site listant les formations H2PROG</TitreH1> 
            <Bouton typeBtn="btn-outline-secondary" css="m-2">Toutes</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">PHP</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">JavaScript</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">Algorithmique</Bouton>

            <table className='table'>
                <thead>
                    <th>Numéro</th>
                    <th>Libellé</th>
                    <th>Description</th>
                    <th>Catégorie</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {
                        formations && formations.map(formation => {
                            console.log(formation);
                            return (
                                <tr key={formation.id}>
                                    <td>{formation.id}</td>
                                    <td>{formation.libelle}</td>
                                    <td>{formation.description}</td>
                                    <td>{formation.categorie}</td>
                                    <td>
                                        <img src={formation.image} className="img-thumbnail" width="200px" alt={formation.image} />
                                    
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Formations;