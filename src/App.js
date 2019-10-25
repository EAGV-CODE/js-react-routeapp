import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>{''} &nbsp;
            <Link to="/contact">Contact</Link>{''} &nbsp;
            <Link to="/links">Links</Link>{''} &nbsp;
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/links" render={ () => <h1>Links</h1>}/>
              <Route render={ () => <h1>Page not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>        
      </div>
    );
  }
}

export default App;
