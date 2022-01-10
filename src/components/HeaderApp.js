import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from '../logo.svg'
import { ShoppingCart } from "./ShoppingCard/shoppingCard";

const style = {
  marginBottom: '30px'
}

export const HeaderApp = () => (
  <Navbar bg="dark" variant="dark" style={style}>
    <Container>
     <Link to={"/"}>
     <Navbar.Brand >
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Mini Ecommerce
      </Navbar.Brand>
     </Link>
      <ShoppingCart />
    </Container>
  </Navbar>
);
