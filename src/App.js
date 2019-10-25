import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Subjects from "./components/pages/Subjects";
import Footer from "./components/pages/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/subjects" component={Subjects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
