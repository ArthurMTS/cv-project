import { useState, useEffect, createContext } from 'react';

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [general, setGeneral] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [expertise, setExpertise] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('data')) {
      const data = JSON.parse(localStorage.getItem('data'));

      setGeneral(data.general);
      setEducation(data.education);
      setExperience(data.experience);
      setExpertise(data.expertise);
    }
  }, []);

  useEffect(() => {
    if (!general && !education && !experience && !expertise) return;

    const data = {
      general,
      education,
      experience,
      expertise
    };

    localStorage.setItem('data', JSON.stringify(data));
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