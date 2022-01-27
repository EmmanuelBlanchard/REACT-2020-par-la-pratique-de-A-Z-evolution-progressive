import { useState } from "react";

// Travail avec des hooks
function Test() {
    // Conserver un entier, booleen, chaine de caracteres 
    
    // useState(31); 
    // Retourne la valeur dans la premiere case du tableau et dans la deuxieme case du tableau, elle retourne une fonction pour modifier la valeur

    // Utilisation du destructuring js, Declaration des états locals
    // const [age,setAge] = useState(31); 
    // const [sexe,setSexe] = useState(true); 
    // const [couleur,setCouleur] = useState("noire"); 
    // const anniversaire = () => setAge(age => age + 1);
    // const changementSexe = () => setSexe(sexe => !sexe);
    
    const [personne,setPersonne] = useState({
        age : 31,
        sexe: true,
        couleur: "noire"
    })

    const anniversaire = () => {
        const nouvellePersonne = {...personne};
        nouvellePersonne.age ++;
        setPersonne(nouvellePersonne);
    }

    const changementSexe = () => {
        const nouvellePersonne = {...personne};
        nouvellePersonne.sexe = !nouvellePersonne.sexe;
        setPersonne(nouvellePersonne);
    }

    const choixCouleur = (couleurDemandee) => {
        const nouvellePersonne = {...personne};
        nouvellePersonne.couleur = couleurDemandee;
        setPersonne(nouvellePersonne);
    }

    // return (
    //     <div>
    //         <div>
    //             Age : {age}
    //             <button onClick={anniversaire}>Anniversaire</button>
    //         </div>
    //         <div>
    //             <button onClick={changementSexe}>{sexe ? "Homme" : "Femme"}</button>
    //         </div>
    //         <div>
    //             Couleur : 
    //             <input type="text" value={couleur} onChange={(event) => setCouleur(event.target.value)} />
    //         </div>
    //     </div>
    // );

    return (
        <div>
            <div>
                Age : {personne.age}
                <button onClick={anniversaire}>Anniversaire</button>
            </div>
            <div>
                <button onClick={changementSexe}>{personne.sexe ? "Homme" : "Femme"}</button>
            </div>
            <div>
                Couleur : 
                <input type="text" value={personne.couleur} onChange={(event) => choixCouleur(event.target.value)} />
            </div>
        </div>
    );
}

export default Test;