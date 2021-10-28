import { useState, createContext } from 'react';

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [general, setGeneral] = useState({});
  const [education, setEducation] = useState({});
  const [experience, setExperience] = useState({});
  const [expertise, setExpertise] = useState({});

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