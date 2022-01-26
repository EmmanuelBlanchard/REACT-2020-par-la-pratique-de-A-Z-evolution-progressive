import React from 'react';
import TitreH1 from '../../../components/UI/Titres/TitreH1';
import Image from 'react-bootstrap/Image'
import imgAccueil from '../../../assets/images/Donjon_Niort_1136px.jpg';

const accueil = (props) => (
    <>
        <TitreH1>Bienvenue sur le site des Deux-Sèvres !</TitreH1>
        <p className='m-3'>Le site vous aidant à trouver les établissements publics des Deux-Sèvres</p>
        <Image src={imgAccueil} alt='Le donjon de Niort vu côté ville (de la place du Donjon).' fluid thumbnail style={{width:"100%"}}/>
        <span>
        Par Antoine.gacioch — Travail personnel <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=35515094">Lien</a>
        </span>
    </>
);

export default accueil;
