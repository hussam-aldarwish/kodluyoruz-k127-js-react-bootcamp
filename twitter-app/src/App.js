import React from 'react';
import './App.scss';
import LeftPane from './components/leftPane/LeftPane';
import Tweet from './components/Tweet';

function App() {
  return (
    <div className="app">
      <LeftPane />
      <Tweet />
    </div>
  );
}

export default App;
