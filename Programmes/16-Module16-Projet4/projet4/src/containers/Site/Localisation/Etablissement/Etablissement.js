import React from 'react';
import Card from 'react-bootstrap/Card';
import Horaires from './Horaires/Horaires';

const etablissement = (props) => (
    <div>
        <Card className="my-3">
            <Card.Header as="h5">{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>
                    Téléphone : {props.telephone} <br />
                    {props.email && `Email : ${props.email}`}
                </Card.Title>
                <Card.Text>
                    <strong>Adresse : </strong><br />
                    {props.adresses[0].lignes[0]}
                    {props.adresses[0].codePostal} - {props.adresses[0].commune}
                    <br />
                    <strong>Horaire : </strong><br />
                    {props.horaires && <Horaires horaires={props.horaires}/>} <br />
                    {props.url && <a href={props.url} className="btn btn-info" target="_blank" rel="noreferrer">Visiter le site web</a>}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default etablissement;
