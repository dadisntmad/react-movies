import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Movies} from "./components/Movies/Movies";
import {SearchMovie} from "./components/SearchMovie/SearchMovie";

export const App: React.FC = () => {
  return (
    <div style={{background: '#141213'}}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Movies}/>
        <Route exact path="/:query" component={SearchMovie}/>
      </Switch>
    </div>
  );
}
