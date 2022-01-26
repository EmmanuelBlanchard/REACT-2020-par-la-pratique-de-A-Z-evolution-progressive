import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const formulaireContact = (props) => (
    <div className='mt-3'>
       <Form>
            <Form.Group className="mb-3" controlId="nom">
                <Form.Label>Nom</Form.Label><Badge bg="warning text-dark m-2">(min 5 caractères)</Badge>
                <Form.Control type="text" placeholder="Votre nom" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Votre Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Votre message</Form.Label><Badge bg="warning text-dark m-2">(entre 100 et 200 caractères)</Badge>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Valider
            </Button>
        </Form>
    </div>
);

export default formulaireContact;
