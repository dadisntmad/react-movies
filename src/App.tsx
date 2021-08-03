import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Movies} from "./components/Movies/Movies";
import {SearchMovie} from "./components/SearchMovie/SearchMovie";
import {MovieInfo} from "./components/MovieInfo/MovieInfo";
import './app.css';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={Movies}/>
        <Route exact path="/:query" component={SearchMovie}/>
        <Route exact path="/:id" component={MovieInfo}/>
      </Switch>
    </div>
  );
}
