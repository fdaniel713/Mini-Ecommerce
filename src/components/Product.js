import React from "react";
import { Col, Row, Card, Button, Badge } from "react-bootstrap";
import "../assets/css/styles.css";

const styles = {
    fontSize: "15px",
   
  };
  
  export const Product = ({ item }) => {
   
    const { title, image, price, description, category } = item;
    return (
      <div className="col-lg-4 d-flex align-items-stretch">
      <Card style={{ marginBottom: "15px", padding: 10 }}>
        <Row>
          <Col xs={8}>
            <Card.Img
              className="mx-auto"
              variant="top"
              src={image}
              style={{ height: 120, width: 120 }}
            />
          </Col>
          <Col xs={4}>
            <Badge pill bg="info">
              {category}
            </Badge>{" "}
          </Col>
        </Row>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Row>
          <Col>
            <Button  variant="warning">Agregar al carrito</Button>
          </Col>
          <Col>
            <Button variant="primary">
              Precio <Badge bg="secondary">${price}</Badge>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
    );
  };