import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about';
import Home from './pages/home';
import Activities from './pages/activities.js'
import AdminActivities from './pages/adminActivities.js'
import Rooms from './pages/Rooms';
import Ammenities from './pages/ammenities';
import AdminAmmenities from './pages/adminAmmenities';
import Admin from './pages/admin';
import AdminRooms from './pages/adminRooms';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About />}/>
          <Route exact path='/activities' element={<Activities/>}/>
          <Route exact path='/ammenities' element={<Ammenities />}/>
          <Route exact path='/rooms' element={<Rooms />}/>
          <Route exact path='/admin' element={<Admin />}/>
          <Route exact path='/admin/activities' element={<AdminActivities />}/>
          <Route exact path='/admin/ammenities' element={<AdminAmmenities />}/>
          <Route exact path='/admin/rooms' element={<AdminRooms />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
