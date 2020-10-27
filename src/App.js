import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navegation from "./components/navegation/Navegation";
import Proyects from "./components/proyects/Proyects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegation />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/proyects" component={Proyects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <hr className="mt-5 mb-5 w-25 border" />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
