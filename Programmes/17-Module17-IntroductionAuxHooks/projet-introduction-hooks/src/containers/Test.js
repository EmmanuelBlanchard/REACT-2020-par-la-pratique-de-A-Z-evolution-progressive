import { useEffect, useState } from "react";

// Hook dès l'utilisation du mot use 
function useIncrement(valeurDeDepart,pas) {
    const [compteur,setCompteur] = useState(valeurDeDepart);

    const increment = () => {
        setCompteur(compteur => compteur + pas);
    }
    return [compteur,increment];
}
// Travail avec des hooks
function Test() {
    const [compteur,increment1] = useIncrement(0,1);
    const [compteur2,increment2] = useIncrement(10,2);

    return (
        <div>
            <button onClick={increment1}>{compteur}</button>

            <button onClick={increment2}>{compteur2}</button>
        </div>
    );
}

export default Test;