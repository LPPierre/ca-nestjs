import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BoxesList from './BoxesList';
import { Breadcrumb, Container, Card, Button, Form, Table, Col, Row } from 'react-bootstrap';

const TrainersList = () => {
  const [trainers, setTrainers] = useState([]);
  const [apiUrl, setApiUrl] = useState('http://localhost:3001/trainers');
  // TODO Handle form validation messages
  const [addTrainerErrors, setAddTrainerErrors] = useState(undefined);
  const [boxesListData] = useState(undefined);

  const initTrainer = {firstName: '', lastName: ''};
  const apiConfig = {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001'}
  const [newTrainer, setNewTrainer] = useState(initTrainer);

  const handleChange = event => {
      setNewTrainer({...newTrainer, [event.target.name]: event.target.value})
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

  useEffect(()=>{
    axios.get(apiUrl, apiConfig).then(response => {
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
              <Table striped bordered size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Boites</th>
                  </tr>
                </thead>
                <tbody>
                {trainers.map(trainer => (
                  <tr key={trainer.id}>
                    <td>{trainer.id}</td>
                    <td>{trainer.firstName}&nbsp;{trainer.lastName}</td>
                    <td>
                      <Button>Afficher ({trainer.boxes.length})</Button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Ajouter un dresseur</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control type="text" value={newTrainer.firstName} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" value={newTrainer.firstName} onChange={handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">Ajouter</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TrainersList;
