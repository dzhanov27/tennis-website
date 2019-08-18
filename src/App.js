import React from 'react';

import './App.css';

import Menu from './containers/Menu';
import Header from './containers/Header';
import Content from './containers/Content';
import AncContainer from './containers/AncContainer';
import Footer from './containers/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content/>
      <AncContainer />
      <Footer/>
    </div>
  );
}

export default App;
