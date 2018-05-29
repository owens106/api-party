import React, { Component } from 'react';

import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ='App-header'>
          <h3 >no party like an API party </h3>
          <h1 >api party</h1>
        </div>
          <ul className ='navLinks'>
            <li> 
              <NavLink to ='/github'> Github API </NavLink>
            </li>
          </ul>


       <Switch>
        <Route path ='/github' render={() => <h1>Github!</h1>}/>
        <Route render ={() => <p> to get started click a link above </p>}/>


        
      </Switch>
      </div>
    );
  }
}

export default App;
