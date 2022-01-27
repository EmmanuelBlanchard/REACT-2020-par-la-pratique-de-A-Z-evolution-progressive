import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';
import { useEffect, useState, useRef} from 'react';
import useLoadData from '../../Hooks/useLoadData';

function Formations() {
    const [formations,loadFormation] = useLoadData();
    const [categorie,setCategorie] = useState("all");

    const estMonte = useRef(false);

    useEffect(() => {
        loadFormation('https://dev.h2prog.com/API_TEST/formations');
    },[]);

    useEffect(() => {
        if(estMonte.current) {
            if(categorie !== "all") {
                loadFormation("https://dev.h2prog.com/API_TEST/formations/"+categorie);
            } else {
                loadFormation("https://dev.h2prog.com/API_TEST/formations");
            } 
        }
    },[categorie])

    useEffect(() => {
        estMonte.current = true;
    },[])

    return (
        <div>
            <TitreH1>Bienvenue sur le site listant les formations H2PROG</TitreH1> 
            <Bouton typeBtn="btn-outline-secondary" css="m-2" clic={() => setCategorie("all")}>Toutes</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2" clic={() => setCategorie("PHP")}>PHP</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2" clic={() => setCategorie("JavaScript")}>JavaScript</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2" clic={() => setCategorie("Algorithmique")}>Algorithmique</Bouton>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Libellé</th>
                        <th>Description</th>
                        <th>Catégorie</th>
                        <th>Image</th>
                    </tr>
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
                                        <img src={formation.image} className="img-thumbnail" width="100px" alt={formation.image} />
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
