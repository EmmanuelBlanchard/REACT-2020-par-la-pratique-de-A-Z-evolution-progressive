import { useState } from "react";

// Travail avec des hooks
function Test() {
    // Enregistrer un nouveau state
    const [compteur, setCompteur] = useState(10);

    const handleClic = () => {
        setCompteur(compteur => compteur + 1);
    }
    return (
        <div>
            <button onClick={handleClic}>Incrémenter le compteur</button>
            {compteur}
        </div>
    );
}

export default Test;