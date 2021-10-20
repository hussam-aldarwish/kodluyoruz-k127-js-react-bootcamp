import React from 'react';
import './App.scss';
import LeftPane from './components/leftPane/LeftPane';
import Rightpane from './components/rigtePane/Rightpane';

function App() {
  return (
    <div className="App">
    <LeftPane />
    <Rightpane />
    </div>
  );
}

export default App;
