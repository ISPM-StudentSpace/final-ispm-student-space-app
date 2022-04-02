import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentProfil from './pages/StudentProfil';
import StudentMessages from './pages/StudentMessages';
import SidebarStudent from './components/SidebarStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Menu/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login />}/>
          </Route>
          <Route path="/student" element={<SidebarStudent/>}>
            <Route path="profil" element={<StudentProfil/>}/>
            <Route path="messages" element={<StudentMessages/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
