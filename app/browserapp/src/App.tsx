import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import Home from './Component/Pages/Home';

import Dualingo from "./Component/Pages/DuolingoDup/DualingoIndex";

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

function App2() {
  return (
    <div className="App">
      <MainTitle>React Redux Typescript StyledComponent Storybook Boilerplate</MainTitle>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/*}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
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
            <>
              <Home />
            </>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


export default App;
