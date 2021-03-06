import React, { Fragment } from 'react';

import './globals.css';
import './styles/header.css'

import Header from './components/header';
import TopCardList from './components/topCardsList';
import Overview from './components/overview';
import Switch from './components/switch';

function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
