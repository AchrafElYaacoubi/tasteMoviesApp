import React from 'react';
import './App.css';
import Home from './containers/Home'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Movie from './containers/Movie'

class App extends React.Component {
    
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2 className="text-center">TASTE MOVIES</h2>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/movies/:id" component={Movie} /> 
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;
