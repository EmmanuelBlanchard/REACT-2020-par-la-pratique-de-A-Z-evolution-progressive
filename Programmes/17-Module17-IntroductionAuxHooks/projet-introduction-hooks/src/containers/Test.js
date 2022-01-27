import { useEffect, useState } from "react";

// Travail avec des hooks
function Test() {
    const [compteur,setCompteur] = useState(0);
    // useState(31); 
    // Retourne la valeur dans la premiere case du tableau et dans la deuxieme case du tableau, elle retourne une fonction pour modifier la valeur

    // Utilisation du destructuring js, Declaration des états locals
    const [age,setAge] = useState(31); 
    const [sexe,setSexe] = useState(true); 
    const [couleur,setCouleur] = useState("noire"); 
    const anniversaire = () => setAge(age => age + 1);
    const changementSexe = () => setSexe(sexe => !sexe);

    // la fonction 'document.title = `L'age est de ${age}`;' va etre réalisée au montage du composant
    // Pareil que la fonction componentDidMount
    /*
    useEffect(() => {
        document.title = `L'age est de ${age}`;
    },[]);
    */

    // La fonction sera réalisée tout le temps au montage et à l'update 
    // Pareil que la componentDidMount et componentDidUpdate
    /*
    useEffect(() => {
        document.title = `L'age est de ${age}`;
        console.log("ici");
    });
    */

    // Indique la dépendance age
    useEffect(() => {
        document.title = `L'age est de ${age}`;
        console.log("ici");
    },[age]);

    // Pareil que la fonction componentDidMount
    /*
    useEffect(() => {
        setInterval(() => {
            setCompteur(compteur => compteur + 1);
        },1000);
    },[]);
    */

    // ComponentWillUnmount
    useEffect(() => {
        const timer = setInterval(() => {
            setCompteur(compteur => compteur + 1);
        },1000);
        return function() { // fonction appelée au démontage
            clearInterval(timer);
        }
    },[]);

    //React recommande de rajouter un useEffect par fonctionnalité différente

    return (
        <div>
            <div>
                Compteur : {compteur} 
            </div>
            <div>
                Age : {age}
                <button onClick={anniversaire}>Anniversaire</button>
            </div>
            <div>
                <button onClick={changementSexe}>{sexe ? "Homme" : "Femme"}</button>
            </div>
            <div>
                Couleur : 
                <input type="text" value={couleur} onChange={(event) => setCouleur(event.target.value)} />
            </div>
        </div>
    );
}

export default Test;