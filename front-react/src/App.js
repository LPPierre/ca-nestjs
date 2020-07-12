import React from 'react';
import './App.css';
import TrainersList from './components/TrainersList';
import BoxesList from './components/BoxesList';
import { Switch, Route } from 'react-router-dom';

function App() {
  // Entry point shows the list of trainers
  return (<div className="App">
    {/* <Switch>
      <Route path="/"> */}
        <TrainersList />
      {/* </Route>
      <Route path="/:trainerId">
        <BoxesList />
      </Route>
    </Switch> */}
  </div>);
}

export default App;
