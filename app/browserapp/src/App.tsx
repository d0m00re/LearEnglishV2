import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

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

function App() {
  return (
    <div className="App">
      <MainTitle>Miaou</MainTitle>
    </div>
  );
}

export default App;
