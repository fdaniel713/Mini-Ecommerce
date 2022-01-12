import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getAllProducts } from "../../app/Services/productsService";
import { Product } from "./Product";

export const ListProducts = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
    .then(data => setProducts(data))
  },[])

  return (

    <Row xs={4}>
      {products.length < 0 ? (
        <div>
          <p>Cargando productos... </p>
        </div>
      ) : (
        products.map((product, index) => <Product key={index} item={product} />)
      )}
    </Row>
  );
};