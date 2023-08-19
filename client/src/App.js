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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LandingPage /> } />
          <Route path="login" element={<LoginPage />} />
           <Route path="/signup" element={<SignupPage /> } />
             <Route path="/dashboard" element={<DashboardPage /> } />
             <Route path="/profile" element={<ProfilePage /> } />
             <Route path="/addpost" element={<AddPost /> } />
             <Route path="/discover" element={<MapPage /> } />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
