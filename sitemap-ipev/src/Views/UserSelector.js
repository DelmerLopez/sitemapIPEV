import { useState } from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from "react-bootstrap";
import Persona from '../img/person-male--v3.png';
import Gobierno from '../img/gobierno.png';

function UserSelector() {

    return(
        <Container>
            <br/>
            <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <Card>
                        <Link to="/Derechohabiente">
                            <Card.Img src={Persona}/>
                            <Card.Body>
                                <Card.Title>Derechohabiente</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                    <Card>
                        <Link to="/Gobierno">
                            <Card.Img src={Gobierno}/>
                            <Card.Body>
                                <Card.Title>Gobierno</Card.Title>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}

export default UserSelector;