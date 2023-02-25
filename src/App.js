import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Routes />} />
      <Route path='/create-note' element={<CreateNote />} />
      <Route path='/edit-note/:id' element={<EditNote />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
