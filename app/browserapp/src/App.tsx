import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Home from './Component/Pages/Home';

import Dualingo from "./Component/Pages/DuolingoDup/DualingoIndex";

import * as DevToView from "./Component/DevTo";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Title2 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.palette.text.primary};
`;

const MainTitle = styled.h1`
  font-family : ${props => props.theme.typographie.fontFamily};
  
  font-weight: ${props => props.theme.typographie['h1'].fontWeight};
  font-size: ${props => props.theme.typographie['h1'].fontSize};
  line-height: ${props => props.theme.typographie['h1'].lineHeight};
  letter-spacing: ${props => props.theme.typographie['h1'].letterSpacing};

  color: ${props => props.theme.palette.text.primary};
`;

function RouterDevTo() {
  return (
    <>
      <Route exact path='/devTo'>
        <DevToView.Main />
      </Route>
      <Route path='/devTo/Isolate'>
        <DevToView.Isolate />
      </Route>
      <Route path='/devTo/Article'>
        <DevToView.Article />
      </Route>

    </>
  );
};

function RouterOld() {
  return (
    <>
      <Route path="/dua">
        <Dualingo /> 
      </Route>
      <Route path="/about">
        <MainTitle>About</MainTitle>
      </Route>
      <Route path="/users">
        <MainTitle>Users</MainTitle>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <RouterDevTo />
          <RouterOld />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
