import React from "react";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getAllProducts } from "../../app/Services/productCartServices";


export const DetailCart = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        getAllProducts()
            .then((allProductsFromDB) => setProducts(allProductsFromDB))


    }, []);

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                
                    {products.length > 0 && products.map((products, index) => (
                    <tr key={index}>
                        <td>{products.id}</td>
                        <td>{products.title}</td>
                        <td>{products.category}</td>
                        <td>{products.price}</td> 

                        </tr>
                        ))}
            
               
            </tbody>
        </Table>

    );

}