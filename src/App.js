import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Subjects from "./pages/Subjects";
import Footer from "./components/Footer";
import SubjectPage from "./pages/SubjectPage";
import "./styles/App.css";
import Support from "./pages/Support";
import NotFound from "./components/Default";
import ArticlePage from "./pages/ArticlePage";
import Account from "./pages/User";
import OnRouteChanged from "./components/OnRouteChange";
import ArticleResult from "./pages/ArticleResult";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <OnRouteChanged />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/about" component={About} />
          <Route path="/subjects" exact component={Subjects} />
          <Route path="/support" component={Support} />
          <Route path="/account" component={Account} />
          <Route path="/subjects/:subjectName" exact component={SubjectPage} />
          <Route
            path="/subjects/:subjectName/:articleName"
            exact
            component={ArticlePage}
          />
          <Route path="/articles" exact component={ArticleResult} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
