import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderApp } from "./components/HeaderApp";
import { Home } from "./views/home";
import { Route , Switch} from "react-router-dom";
import { ProductView } from "./views/ProductView";
import { ProductsView } from "./views/ProductsView";
import { PurchaseView } from "./views/PurchaseView";




const App = () => {
  return (
    <>
      <HeaderApp />
      <Switch>
        <Route path={"/product/:id"} exact component={ProductView} />
        <Route path ={"/purchase"} exact component={PurchaseView} />
        <Route path={"/products/:category"} exact component={ProductsView} />
        <Route path={"/"} exact component={Home} />
      </Switch>



    </>
  );
};

export default App;
