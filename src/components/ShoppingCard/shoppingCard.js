import { useLiveQuery } from "dexie-react-hooks";
import React, { useEffect, useState } from "react";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import db from "../../app/db/db";
import { ShoppingCartItem } from "./shoppingCardItem";

export const ShoppingCart = () => {

  const [totalPrice, setTotalPrice] = useState(0);

  const list= useSelector((state) => state.cartReducer.list)

  const getTotalPrice = () => {
    const total = list?.reduce((totalPrice, currentProduct) => {
      return totalPrice + currentProduct.price
    },0)
    setTotalPrice(total)
  }

  useEffect(() => {
    if(list.length > 0) {
      getTotalPrice()
    }
  },[list])

  return (
    <>
      <Navbar.Toggle aria-controls="navbar-dark-example" />
      <Navbar.Collapse id="navbar-dark-example">
        <Nav>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Carrito"
            menuVariant="dark"
          >
            {list?.map((product) => {
              return <ShoppingCartItem key={product.id} item={product} />
            })}
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to={"/purchase"}> Total: ${totalPrice}  </Link>
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </>
  );
};