import React, { Component } from 'react';
import './App.css';
import CardList from './Components/CardList';
import { TitleBar } from './Components/TitleBar';
import { Stack } from 'office-ui-fabric-react';

class App extends Component {
  render() {
    return (
      <Stack>
        <TitleBar/>
        <CardList/>
      </Stack>
    );
  }
}

export default App;
