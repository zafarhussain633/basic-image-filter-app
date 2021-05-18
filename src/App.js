import React, { Component } from "react";
import "./Appsass.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

// class components
class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export { App };
