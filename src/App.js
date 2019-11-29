import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Subjects from "./components/pages/Subjects";
import Footer from "./components/Footer";
import SubjectPage from "./components/pages/SubjectPage";
import "./App.css";
import Support from "./components/pages/Support";
import NotFound from "./components/Default";
import ArticlePage from "./components/pages/ArticlePage";
import Account from "./components/pages/User";

class App extends React.Component {
  static propTypes = {
    location: React.PropTypes.object.isRequired
  };
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged();
    }
  }
  onRouteChanged() {
    console.log("ROUTE CHANGED");
  }
  render() {
    return (
      <Router>
        <Navbar />
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
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
