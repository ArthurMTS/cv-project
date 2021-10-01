import React, { Component } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Edit } from './pages/Edit';

import './styles/global.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Edit />
        <Footer />
      </>
    );
  }
}