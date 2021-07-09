import React, { Component } from "react";
import "../App.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Package from "../components/Package";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
     <div id='home'>
        <Hero />
        <About />
        <Package />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}