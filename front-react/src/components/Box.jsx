import React from 'react';
import { Breadcrumb, Container, Card, Button, Form, Table, Col, Row, Spinner } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';

const Box = () => {
    const { boxId } = useParams();

    return (
        <Container className="Box">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Dresseurs</Breadcrumb.Item>
                <Breadcrumb.Item active>Boites</Breadcrumb.Item>
                <Breadcrumb.Item active href="#">Boite #{boxId}</Breadcrumb.Item>
            </Breadcrumb>
            {/* TODO BUTTON Back to Boxes list */}
            {/* TODO TABLE Creatures list + FORM Move Creature + FORM Remove Creature */}
        </Container>
    );
};

export default Box;
