import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/pages/About';
import Subjects from './components/pages/Subjects';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">    
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/subjects" component={Subjects}/>
          </Switch>
      </div>
    </Router>
  );
}



export default App;
