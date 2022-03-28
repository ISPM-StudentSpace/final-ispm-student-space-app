import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './parts/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Menu/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
