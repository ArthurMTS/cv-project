import { General } from '../components/sections/General';
import { Education } from '../components/sections/Education';
import { Experience } from '../components/sections/Experience';
import { Expertise } from '../components/sections/Expertise';

import '../styles/edit.css';

export function Edit() {

  return (
    <main id='edit'>
      <General />
      <Education />
      <Experience />
      <Expertise />
    </main>
  );
}