import React, { Component } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Edit } from './pages/Edit';
import { Preview } from './pages/Preview';

import { setData, getData } from './services/storage';

import './styles/global.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    const { general, educational, practical } = getData('data');

    this.state = {
      edit: true,
      general,
      educational,
      practical
    };

    this.changePage = this.changePage.bind(this);
    this.handleGeneral = this.handleGeneral.bind(this);
    this.handleEducational = this.handleEducational.bind(this);
    this.handlePractical = this.handlePractical.bind(this);
  }

  changePage() {
    this.setState({ edit: !this.state.edit });
  }

  handleGeneral(name, email, phone) {
    const general = {
      name,
      email,
      phone
    };

    this.setState({ general });

    const { educational, practical } = this.state;
    setData('data', { general, educational, practical });
  }

  handleEducational(institution, title, start, finish) {
    const educational = {
      institution,
      title,
      start,
      finish
    };

    this.setState({ educational });

    const { general, practical } = this.state;
    setData('data', { general, educational, practical });
  }

  handlePractical(company, position, mainTask, start, finish) {
    const practical = {
      company,
      position,
      mainTask,
      start,
      finish
    };

    this.setState({ practical });

    const { general, educational } = this.state;
    setData('data', { general, educational, practical });
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
            <Edit 
              handleGeneral={this.handleGeneral}
              handleEducational={this.handleEducational}
              handlePractical={this.handlePractical}
              general={this.state.general}
              educational={this.state.educational}
              practical={this.state.practical}
            /> :
            <Preview 
              general={this.state.general}
              educational={this.state.educational}
              practical={this.state.practical}
            />
        }
        <Footer />
      </>
    );
  }
}