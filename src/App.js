import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
// import dummyNotes from './dummy_notes';
import { useState } from 'react';

function App() {
const [notes, setNotes] = useState([])
console.log(notes);
  return (
    <main id='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes notes={notes} />} />
        <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>} />
        <Route path='/edit-note/:id' element={<EditNote />} />
      </Routes>
      </BrowserRouter>
    </main>
  );

  }
export default App;
