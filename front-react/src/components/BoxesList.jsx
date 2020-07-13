import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Breadcrumb, Container, Card, Button, Form, Table, Col, Row, Spinner, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BoxesList = () => {
    const { trainerId } = useParams();
    const [apiUrl, setApiUrl] = useState(`http://localhost:3001/trainers/${trainerId}/boxes`);
    const apiConfig = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001'}
    const [isLoading, setIsLoading] = useState(true);
    const [boxes, setBoxes] = useState([]);

    const initBox = {trainerId: trainerId};
    const [newBox, setNewBox] = useState(initBox);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(newBox)
        axios.post('http://localhost:3001/boxes', newBox, apiConfig).then(response => {
          setBoxes(boxes => [...boxes, newBox])
          setNewBox(initBox)
        }).catch(error => {
          console.log(error)
          // TODO Handle form validation messages
        });
    };

    const handleDelete = (event, boxId) => {
        event.preventDefault();
        console.log(event)
        console.log(boxId)
        axios.delete(`http://localhost:3001/boxes/${boxId}`, apiConfig).then(response => {
            // setBoxes - deleted box
        });
    }

    useEffect((apiConfig)=>{
        setIsLoading(true)
        axios.get(apiUrl, apiConfig).then(response => {
            setIsLoading(false)
            response.data.forEach(box => {
                console.log(box)
                setBoxes(boxes => [...boxes, box])
            });
        });
    }, [apiUrl])

    return (
        <Container className="BoxesList">
            {/* TODO BUTTON Back to Trainers list */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">Dresseurs</Breadcrumb.Item>
                <Breadcrumb.Item active href="#">Boites</Breadcrumb.Item>
            </Breadcrumb>
            {/* TODO FORM Add a creature */}
            <Card style={{ width: '18rem' }}>
                <Card.Header>Nouvelle boite</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Button variant="primary" type="submit" size="sm">Créer</Button>
                    </Form>
                </Card.Body>
            </Card>
            {isLoading &&
              <Spinner animation="border" role="status">
                <span className="sr-only">Chargement...</span>
              </Spinner>
            }
            {!isLoading &&
                <div>
                {boxes.map(box => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Boite #{box.id}</Card.Header>
                        {box.creatures !== undefined && box.creatures.length > 0 &&
                            <Card.Body>
                                <Card.Title>{box.creatures.length}/24 Pokémons</Card.Title>
                                <Card.Text>
                                    {/* TODO Show Box type(s) */}
                                    <Badge variant="secondary">TODO Type</Badge>
                                </Card.Text>
                                <Button variant="primary" size="sm" href={`/box/${box.id}`}>Afficher le contenu</Button>
                            </Card.Body>
                        }
                        {(box.creatures === undefined || box.creatures.length === 0) &&
                            <Card.Body>
                                <Card.Title>Boite vide</Card.Title>
                                <Form onSubmit={handleDelete}>
                                    <Button variant="warning" type="submit" size="sm" value={box.id}>Supprimer</Button>
                                </Form>
                            </Card.Body>
                        }
                    </Card>
                ))}
                </div>
            }
        </Container>
    );
};

export default BoxesList;
