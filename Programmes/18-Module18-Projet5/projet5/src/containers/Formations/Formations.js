import TitreH1 from '../../components/Titres/TitreH1';
import Bouton from '../../components/Bouton/Bouton';

function Formations() {
    return (
        <div>
            <TitreH1>Bienvenue sur le site listant les formations H2PROG</TitreH1> 
            <Bouton typeBtn="btn-outline-secondary" css="m-2">Toutes</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">PHP</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">JavaScript</Bouton>
            <Bouton typeBtn="btn-outline-secondary" css="m-2">Algorithmique</Bouton>
        </div>
    );
}

export default Formations;