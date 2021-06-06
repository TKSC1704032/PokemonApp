import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom"
import HomePage from "./components/HomePage/HomePage";
import PokemonPage from "./components/PokemonPage/PokemonPage";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <HomePage/>}/>
        <Route exact path="/:pokId/" component={PokemonPage}/>
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;