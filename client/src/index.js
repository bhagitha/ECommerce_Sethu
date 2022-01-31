import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>    
    <Route path="/register" element={<Register/>}/>
    <Route path="/home" element={<Homepage/>}/>
  </Routes>
</BrowserRouter>,
document.getElementById("root")
);

