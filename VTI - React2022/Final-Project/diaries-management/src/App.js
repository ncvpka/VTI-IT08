import React,  { Component, createContext, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import Footer from "./components/layout/Footer";
export const Context = createContext();

 function App() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState(false);  
 

    return (
      <Context.Provider value={{data, setData, setStatus, status}}>
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}> </Route>
                <Route path="/project/:id" element={<ProjectDetails/>}> </Route>
                <Route path="/create" element={<CreateProject/>}> </Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    );
  }

export default App;
