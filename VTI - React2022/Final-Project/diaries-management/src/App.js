import React,  { Component } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
