import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from '../pages/Principal.jsx';
import './style/App.css'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
