import React from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Dashboard from './containers/Dashboard/Dashboard';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Dashboard}/>
    </div>
  );
}

export default App;
