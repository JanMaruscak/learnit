import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Subjects from "./components/pages/Subjects";
import Footer from "./components/Footer";
import SubjectPage from "./components/pages/SubjectPage";
import "./App.css";
import Support from "./components/pages/Support";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/subjects" exact component={Subjects} />
        <Route path="/support" component={Support}/>
        <Route path="/subjects/:subjectName" component={SubjectPage} />
        <Route path="/subjects/:subjectName/:article" component={SubjectPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
