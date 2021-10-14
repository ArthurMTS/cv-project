import githubIcon from '../assets/github.svg';

import '../styles/footer.css';

export function Footer() {
  return (
    <footer>
      <p>Made with ❤️ by ArthurMTS</p>
      <a href='https://github.com/ArthurMTS/cv-project' target='_blank' rel='noreferrer'>
        <img src={githubIcon} alt='github icon' />
      </a>
    </footer>
  );
}