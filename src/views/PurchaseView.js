import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { DetailCart } from "../components/ShoppingCard/DetailCart";

export const PurchaseView = ({history}) => {

    const handleCancelButton = () => {
        history.push('/')
    }


return (

<div>
    <h1>Pagina del carrito de compras </h1>
    <DetailCart />
    <Row>
    <Col xs={6}>
        <Button onClick={handleCancelButton}  variant='danger'> Cancelar</Button>
    </Col>
    <Col xs={6}>
        <Button variant= 'success'> Comprar</Button>
    </Col>

    </Row>

</div>

);


}