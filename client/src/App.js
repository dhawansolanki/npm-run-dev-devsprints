import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import DashboardPage from './Dashboard';
import SignupPage from './signup';
import "./App.css"
import LandingPage from './landing';
import { ToastContainer } from 'react-toastify';
import ProfilePage from './Profile';
import AddPost from './AddPost';
import MapPage from './Map';
import Camera from './Camera';
import AnimatedCursor from "react-animated-cursor"

function App() {
  const options = {
    "outerStyle": "circle",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 130,
    "outerHeight": 130
  }
  // magicMouse(options);
              
  return (
    <>
      <AnimatedCursor />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage /> } />
          <Route path="login" element={<LoginPage />} />
           <Route path="/signup" element={<SignupPage /> } />
             <Route path="/dashboard" element={<DashboardPage /> } />
             <Route path="/profile" element={<ProfilePage /> } />
             <Route path="/addpost" element={<AddPost /> } />
             <Route path="/discover" element={<MapPage /> } />
             <Route path="/capture" element={<Camera /> } />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
