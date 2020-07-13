import React from 'react';
import './App.css';
import TrainersList from './components/TrainersList';
import BoxesList from './components/BoxesList';
import Box from './components/Box';
import NotFoundError from './components/NotFoundError';
import { Switch, Route } from 'react-router-dom';

function App() {
  // Entry point shows the list of trainers
  return (<div className="App">
    <Switch>
      <Route exact path="/" component={TrainersList}/>
      <Route exact path="/trainer/:trainerId" component={BoxesList}/>
      <Route exact path="/box/:boxId" component={Box}/>
      <Route component={NotFoundError}/>
    </Switch>
  </div>);
}

export default App;
