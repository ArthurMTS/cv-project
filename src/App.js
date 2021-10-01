import React, { Component } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Edit } from './pages/Edit';
import { Preview } from './pages/Preview';

import './styles/global.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    this.setState({ edit: !this.state.edit });
  }

  render() {
    return (
      <>
        <Header 
          edit={this.state.edit}
          changePage={this.changePage}
        />
        {
          this.state.edit ?
            <Edit /> :
            <Preview />
        }
        <Footer />
      </>
    );
  }
}