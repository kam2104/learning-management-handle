import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom"
import Login from "./screens/Login"
import Main from "./screens/Main"


function App() {
  return (
    <div className="App">

    <Switch>
      <Route  path="/" exact component={Login} />
      <Route  path="/main" exact component={Main} />
      </Switch>

    </div>
  );
}

export default App;
