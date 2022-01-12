import React from "react";
import { FilterListProducts } from "../components/Productos/FilterListProducts";
import { Container } from "react-bootstrap";
import { ProductFilter } from "../components/Productos/ProductFilter";

export const ProductsView = ({history, match}) => {
    const { category } = match.params;
    return (
        <Container>
            <div className="App">
                <ProductFilter history={history} />
                <FilterListProducts category={category} />
            </div>
        </Container>
    )
}