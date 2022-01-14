import React from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AlertProduct } from "../components/Productos/AlertProduct";
import { ListProducts } from "../components/Productos/ListProducts";
import { ProductFilter } from "../components/Productos/ProductFilter";
import { allProductS } from "../redux/actions/products/productsActions";


export const Home = ({history}) => {
   
    const dispatcher = useDispatch();

    useEffect(() => {
    dispatcher(allProductS())
      },[])
     
return(
    <Container>
        <div className="App">
            <ProductFilter history={history} />
            <AlertProduct />
            <ListProducts/>
        </div>
    </Container>

)};