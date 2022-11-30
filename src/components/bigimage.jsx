import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function BigImage() {
    return (
        <Container fluid className="bigImage">
        <Row>
            <Col>
            <Image id="imgBig" src="https://images.unsplash.com/photo-1611244806964-91d204d4a2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBwYXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80" fluid />
            </Col>
        </Row>
        </Container>
    );
}

export default BigImage;

