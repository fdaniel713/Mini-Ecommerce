import React from "react";
import { Container } from "react-bootstrap";
import { ProductFilter } from "../components/Productos/ProductsFilter";
import { FilterListProducts } from "../components/Productos/FilterListProducts";

export const ProductsView = ({history, match}) => {
 const {category} = match.params;
return ( <Container>
    <div className="App">
        <ProductFilter history={history}/>
        <FilterListProducts category={category} />
    </div>
</Container>
)

}
   
