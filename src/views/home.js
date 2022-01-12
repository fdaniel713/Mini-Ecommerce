import React from "react";
import { AlertProduct } from "../components/Productos/AlertProduct";
import { ListProducts } from "../components/Productos/ListProducts";
import { Container } from "react-bootstrap";
import { ProductFilter } from "../components/Productos/ProductFilter";

export const Home = ({history}) => (
    <Container>
        <div className="App">
            <ProductFilter history={history} />
            <AlertProduct />
            <ListProducts />
        </div>
    </Container>

)