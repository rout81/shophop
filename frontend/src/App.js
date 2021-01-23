import "./App.css";
import Container from "react-bootstrap/Container";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Hero />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
