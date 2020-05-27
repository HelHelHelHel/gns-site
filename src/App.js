import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const GunsPage = () => (
  <div>
    <h1>GUNS PAGE</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/guns" component={GunsPage}/>
      </Switch>
    </div>
  );
}

export default App;
