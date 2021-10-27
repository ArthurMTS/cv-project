import { useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Preview } from './pages/Preview';
import { Edit } from './pages/Edit';

import './styles/global.css';

export default function App() {
  const [edit, setEdit] = useState(true);
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [expertise, setExpertise] = useState({});

  return (
    <div className='app'>
      <Header edit={edit} handleEdit={setEdit} />
      {
        edit ?
          <Edit
            setGeneral={setGeneral}
            setEducation={setEducation}
            setExperience={setExperience}
            setExpertise={setExpertise}
          /> :
          <Preview
            general={general}
            education={education}
            experience={experience}
            expertise={expertise}
          />
      }
      <Footer />
    </div>
  );
}