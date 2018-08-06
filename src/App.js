import React, { Component } from 'react';
import './App.css';
import { TodoContainer } from './containers/TodoContainer';
import styled from 'styled-components';

export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <TodoContainer />
      </GlobalContainer>
    );
  }
}

export default App;
