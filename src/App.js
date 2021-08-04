import React, { Component } from 'react';
import classes from './App.css';
import Navigation from './components/UI/Navigation/Navigation';
import CardViewLibrary from './containers/CardViewLibrary/CardViewLibrary';
import SignUp from './containers/SignUp/SignUp';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
      <Navigation />
     
      </div>
    );
  }
}

export default App;
