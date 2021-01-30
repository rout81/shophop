import "./App.css";
import Container from "react-bootstrap/Container";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import ProductPage from "./components/productPage";
import CartPage from "./components/CartPage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={Hero} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
