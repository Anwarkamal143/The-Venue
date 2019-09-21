import React from 'react';

import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured/Index';

function App() {
  return (
    <div className='App' style={{ height: '150vh', background: '#b2d8e9' }}>
      <header className='App-header' style={{padding: '0px'}}>
        <Header />
        <Featured />
      </header>
    </div>
  );
}

export default App;
