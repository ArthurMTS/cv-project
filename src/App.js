import React, { Component } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './styles/global.css';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="app">Hello, world</div>
        <Footer />
      </>
    );
  }
}