import React, { Fragment } from 'react';
// import './App.css';
import './globals.css';
import './styles/header.css'

import Header from './components/header';
import TopCardList from './components/topCardsList';
import Overview from './components/overview';

function App() {
  return (
    <Fragment>
      <Header />
      {/* <TopCardList /> */}
      <Overview />
    </Fragment>
  );
}

export default App;
