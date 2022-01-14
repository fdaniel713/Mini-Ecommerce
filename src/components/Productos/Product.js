import React from "react";
import { Col, Card, Row, Button, Badge } from "react-bootstrap";
import { saveLastInterestProduct } from "../../app/Services/storageServices";
import db from '../../app/db/db';
import "../../assets/css/styles.css";
import { getProductById } from "../../app/Services/productCartServices";
import { useDispatch } from "react-redux";

  
  export const Product = ({ item }) => {
    const { title, image, price, description, category,id } = item;

    const dispacher = useDispatch();

  const addProductToCart = (item) => {
   dispacher(addProductToCart(item))
    
  }

  const handleClickPrductCard =(idProduct)=>{
    getProductById (idProduct)
    .then((data) => console.log(data))
  }

  return (
    <div className="col-lg-4 d-flex align-items-stretch">
      <Card onClick={()=>handleClickPrductCard(id)}style={{ marginBottom: "15px", padding: 10 }}>
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
            <Button onClick={() => addProductToCart(item) } variant="warning">Agregar al carrito</Button>
          </Col>
          <Col>
            <Button onClick={() => saveLastInterestProduct(title) } variant="primary">
              Precio <Badge bg="secondary">${price}</Badge>
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};