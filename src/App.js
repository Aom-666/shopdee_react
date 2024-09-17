

import './App.css';
import Dashboard from './components/dashbord.js';
import EmployeeLogin from './components/Employeelogin.js';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddEmp from './components/Addemp.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<EmployeeLogin/>}/>
        <Route exact path='/Addemp' element={<AddEmp/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/EmployeeLogin' element={<EmployeeLogin/>}/>
        <Route exact path='/signin' element={<SignIn/>}/> 
        <Route exact path='/signup' element={<SignUp/>}/>

      </Routes>
    </Router>
  );
}

export default App;
