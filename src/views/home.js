import React from "react";
import { AlertProduct } from "../components/Productos/AlertProduct";
import { ListProducts } from "../components/Productos/ListProducts";
import { Container } from "react-bootstrap";

export const Home = () => (
    <Container>
        <div className="App">
            <AlertProduct />
            <ListProducts />
        </div>
    </Container>

)