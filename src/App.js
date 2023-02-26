import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';

function App() {
  return (
    <main id='app'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create-note' element={<CreateNote />} />
        <Route path='/edit-note/:id' element={<EditNote />} />
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
