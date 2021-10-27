import { General } from '../components/sections/General';
import { Education } from '../components/sections/Education';
import { Experience } from '../components/sections/Experience';
import { Expertise } from '../components/sections/Expertise';

export function Edit({
  setGeneral,
  setEducation,
  setExperience,
  setExpertise
}) {

  return (
    <main id='edit'>
      <General handler={setGeneral} />
      <Education handler={setEducation} />
      <Experience handler={setExperience} />
      <Expertise handler={setExpertise} />
    </main>
  );
}