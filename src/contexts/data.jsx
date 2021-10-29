import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext({});

let update = false;

export function DataProvider({ children }) {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [expertise, setExpertise] = useState({});

  useEffect(() => {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));

      setGeneral(data.general);
      setEducation(data.education);
      setExperience(data.experience);
      setExpertise(data.expertise);
    }

    update = true;
  }, []);

  useEffect(() => {
    if (update) {
      const data = {
        general,
        education,
        experience,
        expertise
      };
  
      localStorage.setItem('data', JSON.stringify(data));
    }
  }, [general, education, experience, expertise]);

  return (
    <DataContext.Provider value={{ 
      general,
      education,
      experience,
      expertise,
      setGeneral,
      setEducation,
      setExperience,
      setExpertise
    }}>
      {children}
    </DataContext.Provider>
  );
}