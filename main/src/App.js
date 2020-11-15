import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Footer from "./Footer";
import Weather from "./Weather";
import Timeline from "./Timeline";
import Covid from "./Covid";

import { Switch, Route, Redirect } from "react-router-dom";
 
class App extends React.Component {
  
  render(){
    return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services/weather" component={Weather} />
        <Route exact path="/services/timeline" component={Timeline} />
        <Route exact path="/services/covid19track" component={Covid} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
    );
  }
}
 
export default App;