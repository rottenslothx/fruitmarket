import React from "react";
import logo from "./logo.svg";
import { history } from "./helper";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";

import NavBar from "./components/navbar/NavBar";
import VenderNavBar from "./components/navbar/VenderNavBar";
import CustomerNavBar from "./components/navbar/CustomerNavBar";

import MainProduct from "./pages/productlist/MainProduct";
import Home from "./pages/homepage/Home";
import HotDeal from "./pages/hotdeal/HotDeal";
import Basket from "./pages/basket/Basket";
import Refill from "./pages/refill/Refill";

import CustomerList from "./pages/venderpages/customerlist/CustomerList";
import EditProduct from "./pages/venderpages/editproduct/EditProduct";
import SoldHistory from "./pages/venderpages/soldhistory/SoldHistory";
import userModel from "./storage/users";
import fruitModel from "./storage/fruits";

function App() {
  const [active, setActive] = React.useState(null);
  const [role, setRole] = React.useState(null);

  React.useEffect(() => {
    userModel.initial();
    if (userModel.getActivedUser()) setRole(userModel.getActivedUser().role);
    fruitModel.initial();
    setActive(userModel.getActivedUser());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {role === "user" && <CustomerNavBar />}
        {role === "admin" && <VenderNavBar />}
        {!role && <NavBar />}
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/products" component={MainProduct} />
          <Route path="/home" component={Home} />
          <Route path="/promotion" component={HotDeal} />
          <Route path="/basket" component={Basket} />
          <Route path="/refill" component={Refill} />

          <Route path="/customerlist" component={CustomerList} />
          <Route path="/editproduct" component={EditProduct} />
          <Route path="/soldhistory" component={SoldHistory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
