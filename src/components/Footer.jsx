import React, { Component } from 'react';

import githubFi from '../assets/github.svg';

import '../styles/footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer id='footer'>
        <p id='footer-text'>Made with ❤️ by ArthurMTS</p>
        <a href='https://github.com/ArthurMTS/cv-project' target='_blank' rel='noreferrer'>
          <img src={githubFi} alt='Github icon' />
        </a>
      </footer>
    );
  }
}