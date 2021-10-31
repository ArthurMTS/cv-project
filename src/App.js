import { useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { Preview } from './pages/Preview';
import { Edit } from './pages/Edit';

import { DataProvider } from './contexts/data';

import './styles/global.css';

export default function App() {
  const [edit, setEdit] = useState(true);

  return (
    <div className='app'>
      <Header edit={edit} handleEdit={setEdit} />
      <DataProvider>
        {
          edit ?
            <Edit /> :
            <Preview />
        }
      </DataProvider>
      <Footer />
    </div>
  );
}