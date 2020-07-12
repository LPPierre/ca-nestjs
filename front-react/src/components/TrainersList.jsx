import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoxesList from './BoxesList';
import { Breadcrumb, Container, Card, Button, Form, Table, Col, Row, Spinner } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [apiUrl, setApiUrl] = useState('http://localhost:3001/trainers');
  // TODO Handle form validation messages
  const [addTrainerErrors, setAddTrainerErrors] = useState(undefined);

  const [isLoading, setIsLoading] = useState(true);

  const initTrainer = {firstName: undefined, lastName: undefined};
  const apiConfig = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001'}
  const [newTrainer, setNewTrainer] = useState(initTrainer);

  const handleChange = event => {
    setNewTrainer({...newTrainer, [event.target.id]: event.target.value})
  };

  const handleSubmit = event => {
      event.preventDefault();
      axios.post(apiUrl, newTrainer, apiConfig).then(response => {
        setTrainers(trainers => [...trainers, newTrainer])
        setNewTrainer(initTrainer)
      }).catch(error => {
        console.log(error)
        // TODO Handle form validation messages
        // setAddTrainerErrors(error)
      });
  };

  useEffect((apiConfig)=>{
    setIsLoading(true)
    axios.get(apiUrl, apiConfig).then(response => {
      setIsLoading(false)
      response.data.forEach(trainer => {
        setTrainers(trainers => [...trainers, trainer])
      });
    });
  }, [apiUrl])

  return (
    <Container className="TrainersList">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Dresseurs</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col xs={8}>
          <Card>
            <Card.Header>Dresseurs</Card.Header>
            <Card.Body>
            {isLoading &&
              <Spinner animation="border" role="status">
                <span className="sr-only">Chargement...</span>
              </Spinner>
            }
            {!isLoading &&
              <Table striped bordered size="sm">
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>Nom</th>
                    <th>Boites</th>
                  </tr>
                </thead>
                <tbody>
                {trainers.map(trainer => (
                  <tr key={trainer.id}>
                    {/* <td>{trainer.id}</td> */}
                    <td>{trainer.firstName}&nbsp;{trainer.lastName}</td>
                    <td>
                      {trainer.boxes !== undefined && trainer.boxes.length > 0 &&
                        <Button size="sm" href={`/${trainer.id}`}>Afficher ({trainer.boxes.length})</Button>
                      }
                      {(trainer.boxes === undefined || trainer.boxes.length === 0) &&
                        <Button size="sm">Créer</Button>
                      }
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            }
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Ajouter un dresseur</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="text" value={newTrainer.firstName} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group controlId="lastName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" value={newTrainer.lastName} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" size="sm">Ajouter</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainersList;
