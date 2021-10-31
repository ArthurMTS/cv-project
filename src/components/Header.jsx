import { Button } from './Button';

import '../styles/header.css';

export function Header({ edit, handleEdit }) {
  return (
    <header id='main-header'>
      <h1>CV Creator</h1>
      <nav>
        <Button
          disabled={edit}
          onClick={() => handleEdit(!edit)}
        >
          Edit Mode
        </Button>
        <Button
          disabled={!edit}
          onClick={() => handleEdit(!edit)}
        >
          Preview Mode
        </Button>
      </nav>
    </header>
  )
}